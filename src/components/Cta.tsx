import { useRef, type MouseEvent, type ReactNode } from 'react'
import { ArrowRight, X } from '@phosphor-icons/react'

const actionClass =
  'relative inline-flex h-12 min-h-11 w-full items-center justify-center gap-2 overflow-hidden rounded-xl px-5 font-semibold transition-[transform,box-shadow,background-image,border-color] duration-200 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:w-auto'

const legalLinkClass =
  'inline-flex min-h-11 shrink-0 items-center text-sm font-semibold whitespace-nowrap text-white/70 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white'

const dialogClass =
  'fixed top-1/2 left-1/2 m-0 w-[calc(100%-2rem)] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-2xl border-0 bg-white p-0 text-black shadow-lg backdrop:bg-cdtm-brand/55'

const emphasisClass = 'cta-emphasis font-semibold'

const photoConsents = [
  { name: 'Judith Dada', date: '2026-08-13', label: '13. Aug 2026' },
  { name: 'Sebastian Wagner', date: '2026-08-14', label: '14. Aug 2026' },
] as const

function closeIfBackdrop(event: MouseEvent<HTMLDialogElement>) {
  const dialog = event.currentTarget
  const box = dialog.getBoundingClientRect()
  const outside =
    event.clientX < box.left ||
    event.clientX > box.right ||
    event.clientY < box.top ||
    event.clientY > box.bottom
  if (outside) dialog.close()
}

function LegalNotice({
  label,
  titleId,
  children,
}: {
  label: string
  titleId: string
  children: ReactNode
}) {
  const dialogRef = useRef<HTMLDialogElement>(null)

  return (
    <>
      <button
        type="button"
        className={legalLinkClass}
        onClick={() => dialogRef.current?.showModal()}
      >
        {label}
      </button>
      <dialog
        ref={dialogRef}
        aria-labelledby={titleId}
        className={dialogClass}
        onClick={closeIfBackdrop}
      >
        <div className="p-6">
          <div className="flex flex-row items-start justify-between gap-4">
            <h2 id={titleId} className="text-lg font-bold">
              {label}
            </h2>
            <form method="dialog" className="shrink-0">
              <button
                type="submit"
                aria-label="Close"
                className="-mr-2 inline-flex size-11 items-start justify-center rounded-lg text-black/40 transition-colors hover:text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cdtm-brand"
              >
                <X size={20} weight="regular" />
              </button>
            </form>
          </div>
          {children}
        </div>
      </dialog>
    </>
  )
}

export function Cta() {
  return (
    <section
      id="cta"
      className="cta-wash flex min-h-svh flex-col justify-end px-6 pb-12 pt-20 text-white md:px-12 md:pb-16 md:pt-28 lg:pb-20"
    >
      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <h2 className="max-w-4xl text-3xl font-bold md:text-5xl">
          You can take a path like theirs.
        </h2>
        <p className="mt-6 max-w-3xl text-lg text-cdtm-blue-light md:text-xl">
          The Center for Digital Technology & Management (CDTM) offers an additional{' '}
          <strong className={emphasisClass}>master-level program</strong> you take{' '}
          <strong className={emphasisClass}>next to your current studies</strong>. It is
          open to students from LMU and TUM. The coursework is hands-on and focused on
          trend research, product development, and entrepreneurship.
        </p>
        <p className="mt-4 max-w-3xl text-lg text-cdtm-blue-light md:text-xl">
          People who took that path have founded movements, done leading
          research, and built innovative companies.{' '}
          <strong className={emphasisClass}>
            CDTM covers what a lecture hall does not
          </strong>
          . There
          are hundreds more journeys to explore.
        </p>
        <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="https://www.cdtm.com/"
              className={`cta-action text-cdtm-brand ${actionClass}`}
            >
              <span>Get to Know CDTM</span>
              <ArrowRight size={24} weight="regular" />
            </a>
            <a
              href="https://cdtm-paths.up.railway.app/"
              className={`cta-action-ghost text-white ${actionClass}`}
            >
              <span>Explore More Alumni Stories</span>
            </a>
          </div>
          <div className="flex flex-row flex-wrap items-center justify-center gap-x-6 sm:justify-start">
            <LegalNotice label="Imprint" titleId="impressum-title">
              <h3 className="mt-1 text-sm">
                Responsible (Angaben gem. § 5 DDG)
              </h3>
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
              <h3 className="mt-6 text-sm">
                Disclaimer (Haftungsausschluss)
              </h3>
              <p className="mt-2 text-sm leading-relaxed">
                The content of this website is provided for informational purposes
                only. No liability is assumed for the accuracy, completeness, or
                timeliness of the information provided.
              </p>
              <p className="mt-6 text-sm text-black/50">
                Last updated{' '}
                <time dateTime="2026-10-11">10 October 2026</time>
              </p>
            </LegalNotice>
            <LegalNotice label="Photo Rights" titleId="photo-rights-title">
              <h3 className="mt-1 text-sm">Consent</h3>
              <p className="mt-4 text-sm leading-relaxed">
                Each person listed here has approved being featured in this campaign,
                including the rights to use their portrait.
              </p>
              <h3 className="mt-6 text-sm">Date of approval</h3>
              <ul className="mt-3 space-y-3 text-sm leading-relaxed">
                {photoConsents.map((person) => (
                  <li
                    key={person.name}
                    className="flex flex-row items-baseline justify-between gap-4"
                  >
                    <span>{person.name}</span>
                    <time
                      dateTime={person.date}
                      className="shrink-0 text-black/50 tabular-nums"
                    >
                      {person.label}
                    </time>
                  </li>
                ))}
              </ul>
            </LegalNotice>
          </div>
        </div>
      </div>
    </section>
  )
}
