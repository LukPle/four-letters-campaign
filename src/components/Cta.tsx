import { useRef } from 'react'
import { ArrowRightIcon, X } from '@phosphor-icons/react'

const actionClass =
  'relative inline-flex h-12 min-h-11 w-full items-center justify-center gap-2 overflow-hidden rounded-xl px-5 font-semibold transition-[transform,box-shadow,background-image,border-color] duration-200 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:w-auto'

const imprintClass =
  'inline-flex min-h-11 shrink-0 items-center self-center text-sm font-semibold whitespace-nowrap text-white/70 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:self-auto'

export function Cta() {
  const dialogRef = useRef<HTMLDialogElement>(null)

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
          The Center for Digital Technology & Management (CDTM) offers an additional
          master-level program you take next to your current studies. It is open 
          to students from LMU and TUM. The coursework is hands-on and focused on 
          trend research, product development, and entrepreneurship.
        </p>
        <p className="mt-4 max-w-2xl text-lg text-cdtm-pale md:text-xl">
          People who took that path have founded movements, done leading
          research, and built innovative companies.
          CDTM covers what a lecture hall does not. There are hundreds more
          journeys to explore.
        </p>
        <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
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
          <button
            type="button"
            className={imprintClass}
            onClick={() => dialogRef.current?.showModal()}
          >
            Imprint
          </button>
        </div>
      </div>

      <dialog
        ref={dialogRef}
        aria-labelledby="impressum-title"
        className="fixed top-1/2 left-1/2 m-0 w-[calc(100%-2rem)] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-2xl border-0 bg-white p-0 text-black shadow-lg backdrop:bg-cdtm-navy/55"
        onClick={(event) => {
          const dialog = event.currentTarget
          const box = dialog.getBoundingClientRect()
          const outside =
            event.clientX < box.left ||
            event.clientX > box.right ||
            event.clientY < box.top ||
            event.clientY > box.bottom
          if (outside) dialog.close()
        }}
      >
        <div className="p-6">
          <div className="flex flex-row items-start justify-between gap-4">
            <h2 id="impressum-title" className="text-lg font-bold">
              Imprint
            </h2>
            <form method="dialog" className="shrink-0">
              <button
                type="submit"
                aria-label="Close"
                className="-mr-2 inline-flex size-11 items-start justify-center rounded-lg text-cdtm-zinc-mid transition-colors hover:text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cdtm-brand"
              >
                <X size={20} weight="regular" />
              </button>
            </form>
          </div>
          <p className="mt-1 text-sm font-semibold">
            Responsible (Angaben gem. § 5 DDG)
          </p>
          <address className="mt-4 not-italic text-sm leading-relaxed">
            <p>Lukas Plenk</p>
            <p>on behalf of the Marketing & Diversity Taskforce</p>
            <p>Center for Digital Technology & Management (CDTM)</p>
            <p className="mt-3">
              Marsstraße 20–22
              <br />
              80335 Munich
              <br />
              Germany
            </p>
            <p className="mt-3">
              Email
              <br />
              <a
                href="mailto:lukas.plenk@cdtm.com"
                className="font-semibold text-cdtm-brand underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cdtm-brand"
              >
                lukas.plenk@cdtm.com
              </a>
              <br />
              <a
                href="mailto:info@cdtm.com"
                className="font-semibold text-cdtm-brand underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cdtm-brand"
              >
                info@cdtm.com
              </a>
            </p>
          </address>
          <h3 className="mt-6 text-sm font-semibold">
            Disclaimer (Haftungsausschluss)
          </h3>
          <p className="mt-2 text-sm leading-relaxed">
            The content of this website is provided for informational purposes
            only. No liability is assumed for the accuracy, completeness, or
            timeliness of the information provided.
          </p>
          <p className="mt-6 text-sm text-cdtm-zinc-mid">
            Last updated {' '}
            <time dateTime="2026-10-11">10 October 2026</time>
          </p>
        </div>
      </dialog>
    </section>
  )
}
