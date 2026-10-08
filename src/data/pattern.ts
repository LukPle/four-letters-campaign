export type PatternTrack = {
  dir: 'left' | 'right'
  studies: readonly string[]
}

export const patternTracks: PatternTrack[] = [
  {
    dir: 'left',
    studies: [
      'Physics',
      'Business',
      'Economics',
      'Computer Science',
      'Political Science',
      'Law',
      'Medicine',
      'Psychology',
      'Biology',
      'Chemistry',
    ],
  },
  {
    dir: 'right',
    studies: [
      'Mathematics',
      'Statistics',
      'Data Science',
      'Communication',
      'Sociology',
      'History',
      'Philosophy',
      'Geography',
      'Pharmacy',
      'Journalism',
    ],
  },
  {
    dir: 'left',
    studies: [
      'Education',
      'Public Health',
      'Biochemistry',
      'Neurosciences',
      'Art History',
      'Software Engineering',
      'Phonetics and Speech Processing',
      'Epidemiology',
      'Neuro-Cognitive Psychology',
      'Media Informatics',
    ],
  },
  {
    dir: 'right',
    studies: [
      'Bioinformatics',
      'Astrophysics',
      'Sinology',
      'Archaeology',
      'Media Culture Studies',
      'Art and Multimedia',
      'Computer Linguistics',
      'Digital Technologies',
      'Quantitative Economics',
      'Human-Computer-Interaction',
    ],
  },
]
