import cdtmLogo from '../assets/cdtm.svg'
import lmuLogo from '../assets/lmu.svg'

export function Hero() {
  return (
    <section className="flex min-h-svh flex-col bg-cdtm-brand text-white">
      <div className="mx-auto flex min-h-svh w-full max-w-6xl flex-col px-6 md:px-12">
        <header className="pt-8 md:pt-10">
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
        </header>

        <div className="flex flex-1 flex-col justify-center pb-12 pt-10 md:pb-16">
          <h1 className="max-w-5xl font-bold leading-[1.05] tracking-tight text-[clamp(2.75rem,7.5vw,6.5rem)]">
            <span className="block overflow-hidden">
              <span className="hero-rise block">You study at LMU.</span>
            </span>
            <span className="mt-3 block overflow-hidden md:mt-5">
              <span className="hero-rise hero-rise-late block">They did too.</span>
            </span>
          </h1>
        </div>
      </div>
    </section>
  )
}
