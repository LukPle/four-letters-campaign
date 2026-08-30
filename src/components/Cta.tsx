import { ArrowRight } from '@phosphor-icons/react'

export function Cta() {
  return (
    <section className="flex min-h-svh flex-col justify-end bg-cdtm-brand px-6 pb-12 pt-20 text-white md:px-12 md:pb-16 md:pt-28 lg:pb-20">
      <div className="mx-auto w-full max-w-6xl">
        <p className="font-semibold">CDTM</p>
        <h2 className="mt-4 max-w-3xl text-3xl font-bold md:text-5xl">
          If this path looks like yours, take the next step.
        </h2>
        <p className="mt-4 max-w-xl text-lg text-cdtm-pale">
          CDTM sits next to your degree. See the programme — and how to join.
        </p>
        <a
          href="https://www.cdtm.com/"
          className="mt-10 inline-flex min-h-11 items-center gap-2 bg-white px-6 py-3 font-semibold text-cdtm-brand transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          Explore CDTM
          <ArrowRight size={24} weight="regular" />
        </a>
      </div>
    </section>
  )
}
