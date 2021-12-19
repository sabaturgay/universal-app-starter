import PROFILE_IMAGE from '@assets/images/profile.webp'
import BACKGROUND_IMAGE from '@assets/images/background.webp'
// import PROFILE_IMAGE_LOW from '@assets/images/profile-low.webp'
// import BACKGROUND_IMAGE_LOW from '@assets/images/background-low.webp'

export const RESUME_DATA = {
  basics: {
    name: 'Turgay SABA',
    label: 'Full-stack Developer',
    picture: PROFILE_IMAGE,
    email: '...',
    phone: '...',
    website: 'http://turgaysaba.com',
    summary: 'Full-stack Developer',
    location: {
      address: '...',
      postalCode: '...',
      city: 'Maastricht',
      countryCode: 'NL',
      region: 'Limburg',
      name: 'Maastricht, Netherlands',
    },
    profiles: [
      {
        network: 'Linkedin',
        username: 'turgaysaba',
        url: 'https://www.linkedin.com/in/turgaysaba/',
      },
    ],
    company: 'My Company',
  },
  work: [
    {
      name: 'Universiteit Maastricht',
      position: 'Full-stack Developer',
      website: 'http://company.com',
      summary: 'Helping researchers with modern visualization techniques on web. Created two websites and one API.',
      location: 'Maastricht, Netherlands',
      highlights: [],
      id: 'fe4308ef-00d8-4302-bb6d-edbe4a2225ea',
      startDate: '2019-07-06',
      place: { name: 'Maastricht, Netherlands' },
      stillEmployed: true,
      index: 0,
    },
    {
      name: 'KeplverVR',
      position: 'Full-stack Developer',
      website: 'http://company.com',
      startDate: '2018-12-01',
      endDate: '2019-06-01',
      summary: 'Created a VR application for viewing 3D architectural models. Also created some backend services to facilitate the app with authentication and data layer.',
      location: 'Izmir, Turkey',
      highlights: [],
      id: 'ace1d126-3483-44c8-b54a-6d9db14602c2',
      place: { name: 'Izmir, Turkey' },
      stillEmployed: false,
      index: 1,
    },
    {
      name: 'Freelance',
      position: 'Full-stack Developer',
      website: 'http://company.com',
      startDate: '2017-01-01',
      summary: 'Created several mobile applications as freelancer. These were data-intensive applications.\nCreated some backend services to use with these mobile applications:\n- Authentication\n- Authorisation\n- Database',
      location: 'Izmir, Turkey',
      highlights: [],
      id: '49ea4ddf-8ec9-41c7-aae3-146ac82bee19',
      endDate: '2018-12-01',
      place: { name: 'Izmir, Turkey' },
      stillEmployed: true,
      index: 2,
    },
  ],
  volunteer: [],
  education: [
    {
      institution: 'Ege University',
      area: 'Computer Engineering ',
      studyType: 'Engineer Degree',
      startDate: '2011-01-01',
      endDate: '2015-01-01',
      gpa: '4.0',
      courses: [
        'DB1101 - Basic SQL',
      ],
      id: 'c1c2a534-420f-4d4e-a507-7ed912604806',
    },
  ],
  awards: [],
  publications: [],
  skills: [
    {
      name: 'Typescript',
      index: 0,
      value: 100,
      id: 'd4aabc8e-8489-44ac-bbe4-8396d6c4c58c',
    },
    {
      name: 'GraphQL',
      index: 1,
      value: 100,
      id: 'ffec6b0f-f97f-4922-90ad-6063c7b2cc46',
    },
    {
      name: 'React',
      level: 'Master',
      value: 100,
      keywords: [
        'HTML',
        'CSS',
        'Javascript',
      ],
      index: 2,
      id: '3b1aeae7-50a6-4847-aacb-4518b835846e',
    },
    {
      name: 'React Native',
      index: 3,
      value: 90,
      id: '808f06d8-2980-4136-a977-569550ab693a',
    },
    {
      name: 'NodeJS',
      level: 'Master',
      value: 100,
      keywords: [
        'HTML',
        'CSS',
        'Javascript',
      ],
      index: 4,
      id: 'df7d4299-2b1f-4b2b-b80a-81ce26a70ec5',
    },
    {
      name: 'Amazon Web Services',
      index: 5,
      value: 90,
      id: '65c09092-da50-4c68-ad86-c920c491d741',
    },
    {
      name: 'Firebase',
      level: 'Master',
      value: 85,
      keywords: [
        'HTML',
        'CSS',
        'Javascript',
      ],
      index: 6,
      id: 'dc3da92c-4dca-467b-bf53-7ba0fa3e5f86',
    },
    {
      name: 'Github',
      index: 7,
      value: 90,
      id: 'c0db177e-6802-45f5-ac7a-00b3c10b493f',
    },
    {
      name: 'Docker',
      index: 8,
      value: 85,
      id: '8e23b932-0034-449e-86bc-675cf6e295be',
    },
    {
      name: 'Next JS',
      index: 9,
      value: 90,
      id: 'a3bb3405-8bf9-41d6-bf2d-098265b5df65',
    },
  ],
  languages: [
    {
      language: 'English',
      value: 90,
      fluency: 'Native speaker',
      id: '9d23bdfd-fea8-4f8a-a987-c17c6dcf387d',
      index: 0,
    },
    {
      language: 'Turkish',
      value: 100,
      fluency: 'Native speaker',
      id: '81b6dcc1-d769-4eae-81f9-a06443c4b4d8',
      index: 1,
    },
  ],
  interests: [
    {
      name: 'Cycling',
      gifUrl: 'https://media.giphy.com/media/l3J5f5xuFuOBcoS67o/giphy.gif',
      id: 'afa5739f-f868-464e-a1aa-18f5a3ff4e2b',
    },
    {
      name: 'History of Technology',
      gifUrl: 'https://media.giphy.com/media/h7cp0XkrHb8Xu/giphy.gif',
    },

    {
      name: 'Hiking',
      gifUrl: 'https://media.giphy.com/media/LVKLEvOsQmUbpuNugC/giphy.gif',
    },
  ],
  references: [],
  projects: [
    {
      index: 0,
      date: '2019-06-30T21:00:00.000Z',
      description: 'An API to build knowledge graphs, mind maps and 2D scenes easily. It is powered with most used frameworks (React, ReactNative Web, PIXI.js, Cytoscapejs). Two other projects built on top of PerfectGraph.\n',
      id: 'af8c78c3-f7c6-4f3b-9c32-9d37a9032e14',
      images: [],
      link: 'https://sabaturgay.github.io/perfect-graph-docs/',
      name: 'PerfectGraph',
      endDate: '2019-07-01',
    },
    {
      index: 1,
      date: '2020-10-31T21:00:00.000Z',
      description: 'The platform for viewing and editing graph data collaboratively. You can create different views and introspections for the same data. It supports more than one graph algorithms and layouts.\n',
      id: 'c64e6ca1-6300-4d7f-a305-8cfb7c99a9e6',
      images: [],
      link: 'https://next-starter-ibu0ukvcz-sabaturgay.vercel.app/Graph/CaseLawExplorer',
      name: 'CaseLawExplorer',
      endDate: '2020-11-01',
    },
    {
      index: 2,
      date: '2019-10-31T21:00:00.000Z',
      description: 'The platform for students to apply tasks which created by the teachers. Mind map tasks can be created by teachers then check by the system to identify general weaknesses about the task.\n',
      id: 'af4181b1-8955-47fb-8dd9-17c6974335d3',
      images: [],
      link: '',
      name: 'UMind',
      endDate: '2019-11-01',
    },
    {
      index: 3,
      date: '2018-11-30T21:00:00.000Z',
      description: 'Created a VR application for viewing 3D architectural models. Also created some backend services to facilitate the app with authentication and data layer.',
      id: 'd9f7ca32-a40a-418e-affb-317bfb4f520e',
      images: [],
      link: '',
      name: 'Kepler VR',
      endDate: '2018-12-01',
    },
    {
      index: 4,
      date: '2016-12-31T21:00:00.000Z',
      description: 'Created several mobile applications as freelancer. These were data-intensive applications.\nCreated some backend services to use with these mobile applications:\n- Authentication - Authorisation\n- Database',
      id: 'ffb8a4f2-24e6-44ef-bbe7-0593b86d40be',
      images: [],
      link: '',
      name: 'Freelancer as Full-stack Developer ',
      endDate: '2017-01-01',
    },
  ],
  specific: {
    basics: {
      visaSponsorship: false,
      personalDescription: 'I am passionate person about web and mobile technologies. I started working as Full-stack Developer while at university, I have 5 years experience. I use modern development tools like React, ReactNative, TypeScript, GraphQL. ',
    },
    dreamJob: {
      locations: [
      ],
      remoteFrequency: 'regularly',
    },
    currentJob: { issues: {} },
    education: { studiesLevel: 4 },
    work: {
      contractTypes: [
        'permanent',
      ],
      codingYears: 5,
      codingReason: 'Solving real world problems',
      searchState: 'openOpportunities',
      experienceYears: 5,
      codeExperienceYears: 5,
      otherExperienceYears: '',
    },
    sound: { embedUrl: '' },
    interestedBy: 'Web Technologies \nBlockchain\nMachine Learning',
  },
  resumeCustomization: {
    imageHeader: {
      url: BACKGROUND_IMAGE, // 'https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTh8fHdlYiUyMHRlY2hub2xvZ2llc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
      alt: '',
    },
    images: {
      Typescript: 'https://process.filestackapi.com/output=format:png/negative/modulate=brightness:1000/compress/VIF9M8ebQjukQ4oqAkdP',
      GraphQL: 'https://en.wikipedia.org/wiki/GraphQL#/media/File:GraphQL_Logo.svg',
      React: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png',
    },
    cardsOrder: [
      {
        type: 'basics',
        variant: 4,
      },
      {
        type: 'projects',
        variant: 4,
      },
      {
        type: 'skills',
        variant: 0,
      },
      {
        type: 'experiences',
        variant: 4,
      },
      {
        type: 'studies',
        variant: 4,
      },
      {
        type: 'interestedBy',
        variant: 3,
      },
      {
        type: 'gifs',
        variant: 0,
      },
      {
        type: 'language',
        variant: 4,
      },
    ],
    fields: { work: { customDateFormat: 'YYYY' } },
    theme: {
      palette: {
        primary: {
          50: '#ebebeb',
          100: '#d6d7d7',
          200: '#aeafaf',
          300: '#858888',
          400: '#5d6060',
          500: '#343838',
          600: '#2a2d2d',
          700: '#1f2222',
          800: '#151616',
          900: '#0a0b0b',
          contrastDefaultColor: 'light',
        },
        secondary: {
          50: '#e6eff0',
          100: '#ccdfe1',
          200: '#99bfc4',
          300: '#669fa6',
          400: '#337f89',
          500: '#005f6b',
          600: '#004c56',
          700: '#003940',
          800: '#00262b',
          900: '#001315',
          contrastDefaultColor: 'light',
        },
        tertiary: {
          50: '#e6f4f5',
          100: '#cce8ec',
          200: '#99d1d8',
          300: '#66bac5',
          400: '#33a3b1',
          500: '#008c9e',
          600: '#00707e',
          700: '#00545f',
          800: '#00383f',
          900: '#001c20',
          contrastDefaultColor: 'light',
        },
      },
    },
  },
} as const