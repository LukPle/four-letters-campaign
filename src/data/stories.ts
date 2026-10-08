export type Story = {
  id: string
  name: string
  role: string
  then: string
  now: string
  portrait: string
  portraitAlt: string
  instagram?: string
  linkedin?: string
  website?: string
}

export const stories: Story[] = [
  {
    id: '01',
    name: 'Thomas Pischke',
    role: 'Co-Founder & CTO, Trade Republic',
    then: 'I was studying Physics at LMU',
    now: "Now, I'm building Europe's largest broker bank",
    portrait: '/thomas-pischke.jpeg',
    portraitAlt: 'Thomas Pischke',
    linkedin: 'https://www.linkedin.com/in/tpischke',
    website: 'https://traderepublic.com/en-de',
  },
  {
    id: '02',
    name: 'Judith Dada',
    role: 'Co-CEO, Langdock',
    then: 'I was studying Business at LMU',
    now: "Now, I'm scaling the future of European AI",
    portrait: '/judith-dada.webp',
    portraitAlt: 'Judith Dada',
    instagram: 'https://www.instagram.com/jloladada/',
    linkedin: 'https://www.linkedin.com/in/judith-dada',
    website: 'https://langdock.com',
  },
  {
    id: '03',
    name: 'Maximilian Wühr',
    role: 'Co-Founder & CEO, FINN',
    then: 'I was studying Economics at LMU',
    now: "Now, I'm changing how people drive cars",
    portrait: '/maximilian-wuehr.jpeg',
    portraitAlt: 'Maximilian Wühr',
    linkedin: 'https://www.linkedin.com/in/maximilian-wuehr',
    website: 'https://www.finn.com',
  },
  {
    id: '04',
    name: 'Julia Bösch',
    role: 'Co-Founder & Board, Lookiero Outfittery Group',
    then: 'I was studying Business at LMU',
    now: "Now, I'm reinventing online fashion at scale",
    portrait: '/julia-boesch.jpeg',
    portraitAlt: 'Julia Bösch',
    linkedin: 'https://www.linkedin.com/in/julia-b%C3%B6sch',
    website: 'https://www.outfittery.de',
  },
  {
    id: '05',
    name: 'Sebastian Wagner',
    role: 'Co-Founder & CTO, Leegle',
    then: 'I was studying Computer Science at LMU',
    now: "Now, I'm shaping how companies stay compliant",
    portrait: '/sebastian-wagner.webp',
    portraitAlt: 'Sebastian Wagner',
    linkedin: 'https://www.linkedin.com/in/sebastiantimwagner',
    website: 'https://www.leegle.ai',
  },
  {
    id: '06',
    name: 'Hanna Renz',
    role: 'Global Director Digital Product, adidas',
    then: 'I was studying Political Science at LMU',
    now: "Now, I'm leading digital products for sports",
    portrait: '/hanna-renz.jpeg',
    portraitAlt: 'Hanna Renz',
    linkedin: 'https://www.linkedin.com/in/hannarenz',
  },
]
