import { ArrowRightIcon } from '@phosphor-icons/react'

const actionClass =
  'relative inline-flex h-12 min-h-11 w-full items-center justify-center gap-2 overflow-hidden rounded-xl px-5 font-semibold transition-[transform,box-shadow,background-image,border-color] duration-200 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:w-auto'

export function Cta() {
  return (
    <section
      id="cta"
      className="flex min-h-svh flex-col justify-end bg-cdtm-brand px-6 pb-12 pt-20 text-white md:px-12 md:pb-16 md:pt-28 lg:pb-20"
    >
      <div className="mx-auto w-full max-w-6xl">
        <h2 className="max-w-3xl text-3xl font-bold md:text-5xl">
          You can take a path like theirs.
        </h2>
        <p className="mt-6 max-w-2xl text-lg text-cdtm-pale md:text-xl">
          CDTM is an additional master-level programme you take next to your
          current studies. The coursework is hands-on and focused on trend research,
          product development, and entrepreneurship.
        </p>
        <p className="mt-4 max-w-2xl text-lg text-cdtm-pale md:text-xl">
          People who took that path have founded movements, done leading
          research, and built innovative companies. 
          CDTM covers what a lecture hall does not. There are hundreds more 
          journeys to explore.
        </p>
        <p className="mt-6 max-w-2xl text-lg font-semibold md:text-xl">
          If this sounds like you, look closer.
        </p>
        <div className="mt-10 flex max-w-2xl flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href="https://www.cdtm.com/"
            className={`cta-action text-cdtm-brand ${actionClass}`}
          >
            <span>Get to Know CDTM</span>
            <ArrowRightIcon size={24} weight="regular" />
          </a>
          <a
            href="https://cdtm-paths.up.railway.app/"
            className={`cta-action-ghost text-white ${actionClass}`}
          >
            <span>Explore More Alumni Stories</span>
          </a>
        </div>
      </div>
    </section>
  )
}
