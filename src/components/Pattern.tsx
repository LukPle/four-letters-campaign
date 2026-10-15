import { useEffect, useRef } from 'react'
import { studyTracks } from '../data/pattern'

function clamp01(n: number) {
  return Math.min(1, Math.max(0, n))
}

function smoothstep(p: number, a: number, b: number) {
  const x = clamp01((p - a) / (b - a))
  return x * x * (3 - 2 * x)
}

function writeMotion(section: HTMLElement, reduced: boolean) {
  const rect = section.getBoundingClientRect()
  const vh = window.innerHeight
  const range = section.offsetHeight - vh
  const p = reduced
    ? 1
    : range <= 0
      ? 1
      : clamp01(-rect.top / range)

  section.style.setProperty('--intro', String(1 - smoothstep(p, 0.04, 0.13)))
  section.style.setProperty(
    '--cue',
    String(smoothstep(p, 0.17, 0.24) * (1 - smoothstep(p, 0.34, 0.42))),
  )
  section.style.setProperty('--cdtm', String(smoothstep(p, 0.46, 0.58)))
  section.style.setProperty('--lift', String(smoothstep(p, 0.64, 0.74)))
  section.style.setProperty('--line', String(smoothstep(p, 0.7, 0.78)))
  section.style.setProperty('--field', String(smoothstep(p, 0.76, 0.86)))
  section.style.setProperty('--quiet', '0')
}

function Track({
  dir,
  studies,
}: {
  dir: 'left' | 'right'
  studies: readonly string[]
}) {
  return (
    <div className="overflow-hidden">
      <div data-track={dir} className="flex w-max">
        {(['a', 'b'] as const).map((copy) => (
          <div
            key={copy}
            className="flex items-baseline gap-8 pr-8 md:gap-14 md:pr-14"
          >
            {studies.map((study) => (
              <span
                key={study}
                className="shrink-0 text-base font-semibold tracking-tight text-white/40 md:text-xl"
              >
                {study}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export function Pattern() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    let frame = 0

    const tick = () => {
      writeMotion(section, motionQuery.matches)
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

  const upper = studyTracks.slice(0, 2)
  const lower = studyTracks.slice(2)

  return (
    <section
      ref={sectionRef}
      data-pattern
      className="relative bg-black motion-safe:h-[460svh]"
      aria-label="The shared pattern"
    >
      <div className="relative flex min-h-svh flex-col overflow-hidden motion-safe:sticky motion-safe:top-0 motion-safe:h-svh motion-safe:max-h-svh">
        <div className="relative min-h-0 flex-1">
          <div
            data-board="upper"
            className="pointer-events-none absolute inset-x-0 bottom-0 flex flex-col justify-end gap-5 pb-4 md:gap-8 md:pb-6"
            aria-hidden
          >
            {upper.map((track) => (
              <Track key={track.studies[0]} {...track} />
            ))}
          </div>
        </div>

        <div className="relative z-10 shrink-0 px-6 py-5 text-center md:py-8">
          <div className="relative">
            <div
              aria-hidden
              className="pointer-events-none absolute top-0 left-1/2 h-28 w-[min(28rem,80vw)] rounded-full bg-cdtm-brand/25 blur-3xl md:h-36"
              style={{
                opacity: 'var(--cdtm)',
                transform:
                  'translate(-50%, -20%) translate3d(0, calc((1 - var(--lift)) * 3.1rem), 0)',
              }}
            />

            <h2
              className="relative font-bold leading-none tracking-[0.14em] text-white text-[clamp(3.25rem,15vw,8.5rem)]"
              style={{
                opacity: 'var(--cdtm)',
                transform:
                  'translate3d(0, calc((1 - var(--lift)) * 3.1rem), 0)',
              }}
            >
              CDTM
            </h2>

            <p
              className="absolute top-1/2 left-1/2 w-[min(40rem,92vw)] font-heading text-xl font-bold tracking-tight text-white md:text-3xl"
              style={{
                opacity: 'var(--intro)',
                transform: 'translate(-50%, -50%)',
              }}
            >
              Every story is different, but they share one pattern.
            </p>

            <p
              className="absolute top-1/2 left-1/2 w-[min(40rem,92vw)] font-heading text-xl font-bold tracking-tight text-white md:text-3xl"
              style={{
                opacity: 'var(--cue)',
                transform: 'translate(-50%, -50%)',
              }}
            >
              One with four letters.
            </p>

            <p
              className="relative mx-auto mt-6 w-[min(40rem,92vw)] font-heading text-xl font-bold tracking-tight text-white md:mt-8 md:text-3xl"
              style={{
                opacity: 'var(--line)',
                transform: 'translate3d(0, calc((1 - var(--line)) * 0.55rem), 0)',
              }}
            >
              A program for students from all backgrounds.
            </p>
          </div>
        </div>

        <div className="relative min-h-0 flex-1">
          <div
            data-board="lower"
            className="pointer-events-none absolute inset-x-0 top-0 flex flex-col justify-start gap-5 pt-4 md:gap-8 md:pt-6"
            aria-hidden
          >
            {lower.map((track) => (
              <Track key={track.studies[0]} {...track} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
