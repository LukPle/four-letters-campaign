import { stories, type Story } from '../data/stories'

function Path({ stations }: { stations: string[] }) {
  const lastIndex = stations.length - 1

  return (
    <ol className="mt-12 flex list-none flex-col p-0 lg:flex-row lg:items-start">
      {stations.map((station, index) => {
        const last = index === lastIndex

        return (
          <li
            key={`${station}-${index}`}
            className="flex lg:min-w-0 lg:flex-1 lg:flex-col"
          >
            <div className="flex flex-col items-center lg:w-full lg:flex-row lg:items-center">
              <span
                className={
                  last
                    ? 'size-3 shrink-0 rounded-full bg-cdtm-lime'
                    : 'size-2.5 shrink-0 rounded-full border-2 border-cdtm-brand bg-white'
                }
              />
              {!last && (
                <span
                  className="min-h-4 w-px flex-1 bg-cdtm-zinc-light lg:h-px lg:min-h-0 lg:w-auto"
                  aria-hidden
                />
              )}
            </div>
            <p
              className={`pb-6 pl-4 text-sm leading-snug lg:pb-0 lg:pl-0 lg:pr-3 lg:pt-3 ${
                last
                  ? 'font-semibold text-cdtm-brand'
                  : 'text-cdtm-zinc-mid'
              }`}
            >
              {station}
            </p>
          </li>
        )
      })}
    </ol>
  )
}

function StoryBlock({ story, flip }: { story: Story; flip: boolean }) {
  return (
    <li
      className={`flex flex-col gap-10 border-b border-cdtm-zinc-light py-20 last:border-b-0 md:items-stretch md:gap-16 md:py-28 ${
        flip ? 'md:flex-row-reverse' : 'md:flex-row'
      }`}
    >
      <div className="flex min-h-48 items-end bg-cdtm-ice px-8 py-8 md:min-h-[28rem] md:w-[42%] md:shrink-0 md:px-10 md:py-10">
        <p className="border-b-4 border-cdtm-lime pb-3 text-7xl font-bold leading-none text-cdtm-brand md:text-8xl lg:text-9xl">
          {story.id}
        </p>
      </div>

      <div className="flex flex-1 flex-col justify-end md:py-4">
        <p className="text-lg text-cdtm-zinc-mid md:text-2xl">{story.then}</p>
        <p className="mt-3 text-3xl font-bold leading-[1.1] text-cdtm-brand md:text-5xl">
          {story.now}
        </p>
        <h3 className="mt-10 font-semibold text-black">{story.name}</h3>
        <Path stations={story.stations} />
      </div>
    </li>
  )
}

export function Stories() {
  return (
    <section className="bg-white px-6 py-20 md:px-12 md:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="font-semibold text-cdtm-brand">Alumni stories</p>
        <h2 className="mt-4 max-w-3xl text-3xl font-bold text-cdtm-brand md:text-5xl">
          Same pattern. Six times.
        </h2>
        <p className="mt-4 max-w-xl text-lg text-black">
          Each path starts at LMU, then CDTM. The later stations are
          placeholders.
        </p>

        <ul className="mt-8 list-none p-0">
          {stories.map((story, index) => (
            <StoryBlock
              key={story.id}
              story={story}
              flip={index % 2 === 1}
            />
          ))}
        </ul>
      </div>
    </section>
  )
}
