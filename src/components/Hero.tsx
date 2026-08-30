import cdtmLogo from '../assets/cdtm.svg'
import lmuLogo from '../assets/lmu.svg'

export function Hero() {
  return (
    <section className="flex min-h-svh flex-col bg-cdtm-ice">
      <header className="px-6 pt-8 md:px-12 md:pt-10">
        <p className="flex items-center gap-3">
          <span
            role="img"
            aria-label="CDTM"
            className="inline-block h-9 aspect-[85/64] bg-cdtm-brand md:h-11"
            style={{
              maskImage: `url("${cdtmLogo}")`,
              maskSize: 'contain',
              maskRepeat: 'no-repeat',
              WebkitMaskImage: `url("${cdtmLogo}")`,
              WebkitMaskSize: 'contain',
              WebkitMaskRepeat: 'no-repeat',
            }}
          />
          <span className="text-sm text-cdtm-zinc-mid" aria-hidden>
            x
          </span>
          <span
            role="img"
            aria-label="LMU"
            className="inline-block h-4 aspect-[101/42] bg-cdtm-brand md:h-5"
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
      <div className="flex flex-1 flex-col justify-end px-6 pb-12 md:px-12 md:pb-16 lg:pb-20">
        <h1 className="max-w-4xl text-4xl font-bold leading-[1.08] text-cdtm-brand md:text-6xl lg:text-7xl">
          You study at LMU.
          <span className="mt-4 block">
            CDTM is what some of you do next.
          </span>
        </h1>
      </div>
    </section>
  )
}
