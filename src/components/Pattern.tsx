import { useEffect, useRef } from 'react'
import { patternTracks } from '../data/pattern'

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

  section.style.setProperty('--intro', String(1 - smoothstep(p, 0.04, 0.22)))
  section.style.setProperty('--cdtm', String(smoothstep(p, 0.1, 0.28)))
  section.style.setProperty('--field', String(smoothstep(p, 0.22, 0.42)))
  section.style.setProperty('--line', String(smoothstep(p, 0.7, 0.88)))
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
                className="shrink-0 text-lg font-semibold tracking-tight text-white/55 md:text-2xl"
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

  const upper = patternTracks.slice(0, 2)
  const lower = patternTracks.slice(2)

  return (
    <section
      ref={sectionRef}
      data-pattern
      className="relative bg-black motion-safe:h-[300svh]"
      aria-label="The shared pattern"
    >
      <div className="relative flex min-h-svh flex-col overflow-hidden motion-safe:sticky motion-safe:top-0 motion-safe:h-svh motion-safe:max-h-svh">
        <div className="relative min-h-0 flex-1 overflow-hidden">
          <div
            data-board
            className="pointer-events-none absolute inset-x-0 bottom-0 flex flex-col justify-end gap-5 pb-3 md:gap-8 md:pb-5"
            aria-hidden
          >
            {upper.map((track) => (
              <Track key={track.studies[0]} {...track} />
            ))}
          </div>
        </div>

        <div className="relative z-10 shrink-0 px-6 py-7 text-center md:py-10">
          <div
            aria-hidden
            className="pointer-events-none absolute top-1/2 left-1/2 h-28 w-[min(28rem,80vw)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cdtm-brand/25 blur-3xl md:h-36"
            style={{ opacity: 'var(--cdtm)' }}
          />

          <p
            className="absolute bottom-full left-1/2 mb-6 w-[min(40rem,92vw)] text-xl font-semibold tracking-tight text-white md:mb-10 md:text-3xl"
            style={{
              opacity: 'var(--intro)',
              transform:
                'translate3d(-50%, calc((1 - var(--intro)) * -0.4rem), 0)',
            }}
          >
            Every story is different, but they share one pattern.
          </p>

          <h2
            className="relative font-bold leading-none tracking-[0.14em] text-white text-[clamp(3.25rem,15vw,8.5rem)]"
            style={{
              opacity: 'var(--cdtm)',
              transform: 'translate3d(0, calc((1 - var(--cdtm)) * 1.15rem), 0)',
            }}
          >
            CDTM
          </h2>

          <p
            className="relative mx-auto mt-6 w-[min(36rem,92vw)] text-lg font-semibold tracking-tight text-white md:mt-10 md:text-2xl"
            style={{
              opacity: 'var(--line)',
              transform: 'translate3d(0, calc((1 - var(--line)) * 0.45rem), 0)',
            }}
          >
            CDTM can be combined with any study background.
          </p>
        </div>

        <div className="relative min-h-0 flex-1 overflow-hidden">
          <div
            data-board
            className="pointer-events-none absolute inset-x-0 top-0 flex flex-col justify-start gap-5 pt-3 md:gap-8 md:pt-5"
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
