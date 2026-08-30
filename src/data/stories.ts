export type Story = {
  id: string
  name: string
  then: string
  now: string
  stations: string[]
}

export const stories: Story[] = [
  {
    id: '01',
    name: 'Alumni 01',
    then: 'I was studying at LMU',
    now: "Now, I'm [placeholder]",
    stations: [
      'LMU',
      'CDTM',
      'Placeholder role',
      'Founder',
      'Forbes 30 under 30',
    ],
  },
  {
    id: '02',
    name: 'Alumni 02',
    then: 'I was studying at LMU',
    now: "Now, I'm [placeholder]",
    stations: ['LMU', 'CDTM', 'Placeholder now'],
  },
  {
    id: '03',
    name: 'Alumni 03',
    then: 'I was studying at LMU',
    now: "Now, I'm [placeholder]",
    stations: ['LMU', 'CDTM', 'Placeholder role', 'Founder'],
  },
  {
    id: '04',
    name: 'Alumni 04',
    then: 'I was studying at LMU',
    now: "Now, I'm [placeholder]",
    stations: [
      'LMU',
      'CDTM',
      'Placeholder role',
      'Placeholder role',
      'Founder',
      'Forbes 30 under 30',
    ],
  },
  {
    id: '05',
    name: 'Alumni 05',
    then: 'I was studying at LMU',
    now: "Now, I'm [placeholder]",
    stations: ['LMU', 'CDTM', 'Founder', 'Placeholder now'],
  },
  {
    id: '06',
    name: 'Alumni 06',
    then: 'I was studying at LMU',
    now: "Now, I'm [placeholder]",
    stations: ['LMU', 'CDTM', 'Forbes 30 under 30'],
  },
]
