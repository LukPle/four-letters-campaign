import { useEffect, useRef } from 'react'
import {
  GlobeSimple,
  InstagramLogo,
  LinkedinLogo,
  type Icon,
} from '@phosphor-icons/react'
import { stories, type Story } from '../data/stories'

function clamp01(n: number) {
  return Math.min(1, Math.max(0, n))
}

function smoothstep(p: number, a: number, b: number) {
  const x = clamp01((p - a) / (b - a))
  return x * x * (3 - 2 * x)
}

function writeMotion(chapter: HTMLElement, reduced: boolean) {
  const rect = chapter.getBoundingClientRect()
  const vh = window.innerHeight
  const range = chapter.offsetHeight - vh
  const p = reduced
    ? 1
    : range <= 0
      ? 1
      : clamp01(-rect.top / range)
  const now = smoothstep(p, 0.08, 0.62)
  const thenDim = smoothstep(p, 0.1, 0.6)

  chapter.style.setProperty('--then-o', String(1 - thenDim * 0.62))
  chapter.style.setProperty('--now-o', String(now))
  chapter.style.setProperty('--now-y', `${(1 - now) * 1.15}rem`)
  chapter.style.setProperty('--photo-y', `${p * -1.25}%`)

  const nowBlock = chapter.querySelector('[data-now]')
  if (nowBlock instanceof HTMLElement) {
    nowBlock.inert = now < 0.08
  }
}

function StoryLinks({ story }: { story: Story }) {
  const items: { href: string; label: string; Icon: Icon }[] = []

  if (story.instagram) {
    items.push({
      href: story.instagram,
      label: `${story.name} on Instagram`,
      Icon: InstagramLogo,
    })
  }
  if (story.linkedin) {
    items.push({
      href: story.linkedin,
      label: `${story.name} on LinkedIn`,
      Icon: LinkedinLogo,
    })
  }
  if (story.website) {
    items.push({
      href: story.website,
      label: `${story.name} website`,
      Icon: GlobeSimple,
    })
  }

  if (items.length === 0) return null

  return (
    <ul className="mt-5 flex list-none items-center gap-5 p-0">
      {items.map(({ href, label, Icon }) => (
        <li key={label}>
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={label}
            className="inline-flex min-h-11 items-center text-white/70 transition-colors hover:text-cdtm-lime focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <Icon size={24} weight="regular" />
          </a>
        </li>
      ))}
    </ul>
  )
}

function StoryChapter({
  story,
  flip,
  layer,
}: {
  story: Story
  flip: boolean
  layer: number
}) {
  return (
    <article
      data-story
      className="relative -mb-px bg-black last:mb-0 motion-safe:h-[240svh]"
      style={{ zIndex: layer }}
    >
      <div className="relative flex min-h-svh flex-col overflow-hidden motion-safe:sticky motion-safe:top-0 motion-safe:h-svh motion-safe:max-h-svh">
        <div
          data-photo={flip ? 'end' : 'start'}
          className={`absolute inset-0 overflow-hidden bg-cdtm-navy md:inset-auto md:top-0 md:bottom-0 md:w-1/2 ${
            flip ? 'md:right-0' : 'md:left-0'
          }`}
        >
          <img
            src={story.portrait}
            alt={story.portraitAlt}
            className={`block size-full origin-[center_20%] object-cover object-[center_20%] ${
              flip
                ? 'md:origin-[72%_20%] md:object-[72%_20%]'
                : 'md:origin-[28%_20%] md:object-[28%_20%]'
            }`}
          />
        </div>

        <div
          className={`relative z-10 flex min-h-0 flex-1 flex-col justify-end bg-gradient-to-t from-black from-30% via-black/80 via-55% to-transparent px-6 pb-10 pt-8 md:h-full md:w-1/2 md:bg-none md:bg-black md:px-12 md:pb-16 md:pt-12 lg:px-16 lg:pb-20 ${
            flip ? 'md:self-start' : 'md:self-end'
          }`}
        >
          <p
            className="text-2xl font-bold leading-[1.1] tracking-tight text-white md:text-4xl lg:text-5xl"
            style={{ opacity: 'var(--then-o)' }}
          >
            {story.then}
          </p>

          <div
            data-now
            style={{
              opacity: 'var(--now-o)',
              transform: 'translate3d(0, var(--now-y), 0)',
            }}
          >
            <p className="mt-5 text-2xl font-bold leading-[1.1] tracking-tight text-white md:text-4xl lg:text-5xl">
              <span aria-hidden className="mb-4 block h-px w-8 bg-cdtm-lime" />
              {story.now}
            </p>
          </div>

          <h2 className="mt-8 text-base font-semibold text-white md:mt-10 md:text-lg">
            {story.name}
          </h2>
          <p className="mt-1 text-sm text-cdtm-zinc-mid md:text-base">
            {story.role}
          </p>
          <StoryLinks story={story} />
        </div>
      </div>
    </article>
  )
}

export function Stories() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const chapters = [
      ...section.querySelectorAll<HTMLElement>('[data-story]'),
    ]
    let frame = 0

    const tick = () => {
      const reduced = motionQuery.matches
      for (const chapter of chapters) {
        writeMotion(chapter, reduced)
      }
      frame = 0
    }

    const kick = () => {
      if (!frame) frame = requestAnimationFrame(tick)
    }

    kick()
    window.addEventListener('scroll', kick, { passive: true })
    window.addEventListener('resize', kick)
    motionQuery.addEventListener('change', kick)

    return () => {
      window.removeEventListener('scroll', kick)
      window.removeEventListener('resize', kick)
      motionQuery.removeEventListener('change', kick)
      cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <section
      id="stories"
      ref={sectionRef}
      className="isolate"
      aria-label="Alumni stories"
    >
      {stories.map((story, index) => (
        <StoryChapter
          key={story.id}
          story={story}
          flip={index % 2 === 1}
          layer={index + 1}
        />
      ))}
    </section>
  )
}
