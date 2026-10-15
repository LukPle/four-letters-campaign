import { ArrowDown } from '@phosphor-icons/react'
import cdtmLogo from '../assets/cdtm.svg'
import lmuLogo from '../assets/lmu.svg'

export function Hero() {
  return (
    <section className="cdtm-texture flex min-h-svh flex-col overflow-hidden bg-cdtm-brand text-white">
      <div className="relative z-10 mx-auto flex min-h-svh w-full max-w-6xl flex-col px-6 md:px-12">
        <header className="flex items-center justify-between gap-6 pt-8 md:pt-10">
          <p className="hero-in flex items-center gap-3">
            <span
              role="img"
              aria-label="CDTM"
              className="inline-block h-9 aspect-[85/64] bg-white md:h-11"
              style={{
                maskImage: `url("${cdtmLogo}")`,
                maskSize: 'contain',
                maskRepeat: 'no-repeat',
                WebkitMaskImage: `url("${cdtmLogo}")`,
                WebkitMaskSize: 'contain',
                WebkitMaskRepeat: 'no-repeat',
              }}
            />
            <span className="text-base font-semibold md:text-lg" aria-hidden>
              ×
            </span>
            <span
              role="img"
              aria-label="LMU"
              className="inline-block h-4 aspect-[101/42] bg-white md:h-5"
              style={{
                maskImage: `url("${lmuLogo}")`,
                maskSize: 'contain',
                maskRepeat: 'no-repeat',
                WebkitMaskImage: `url("${lmuLogo}")`,
                WebkitMaskSize: 'contain',
                WebkitMaskRepeat: 'no-repeat',
              }}
            />
          </p>
          <a
            href="#cta"
            className="hero-in inline-flex min-h-11 shrink-0 items-center text-sm font-semibold whitespace-nowrap text-white/70 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            What is CDTM?
          </a>
        </header>

        <div className="flex flex-1 flex-col justify-center py-10">
          <h1 className="max-w-5xl font-bold leading-[1.05] tracking-tight text-[clamp(2.75rem,7.5vw,6.5rem)]">
            <span className="block overflow-hidden">
              <span className="hero-rise block">You study at LMU.</span>
            </span>
            <span className="mt-3 block overflow-hidden md:mt-5">
              <span className="hero-rise hero-rise-late block">They did too.</span>
            </span>
          </h1>
        </div>

        <div className="flex justify-center pb-6 md:pb-8">
          <a
            href="#stories"
            aria-label="Scroll to stories"
            className="hero-cue inline-flex min-h-11 min-w-11 items-center justify-center text-white/80 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            <ArrowDown size={22} weight="regular" className="hero-scroll" />
          </a>
        </div>
      </div>
    </section>
  )
}
