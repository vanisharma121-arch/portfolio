// Central content for the portfolio. Edit copy/data here — the components are
// purely presentational.

export const navLinks = [
  { href: '#about', label: 'About me' },
  { href: '#resume', label: 'Resume' },
  { href: '#work', label: 'Work' },
]

// ─── HERO ───
export const profile = {
  name: 'Vani Sharma',
  firstName: 'Vani',
  tagline: 'Biotechnology Researcher & Brand Strategist',
  bio: 'I am an MS Biotechnology candidate at Northeastern University, bridging lab science and brand strategy. From clinical R&D at Nivea to social campaigns that grew engagement 45%, I love turning complex science into clear, human stories.',
  linkedin: 'linkedin.com/in/vanisharma',
  linkedinUrl: 'https://www.linkedin.com/in/vanisharma',
  badge: 'MS Biotech · 2026',
  nationality: 'Indian',
  contact: {
    location: 'Boston, MA',
    email: 'sharma.vani1@northeastern.edu',
    phone: '+1 (857) 396-8591',
  },
}

// ─── EDUCATION ───
export const education = [
  {
    years: '2024 – 2026',
    school: 'Northeastern University, Boston',
    detail: 'MS, Biotechnology',
  },
  {
    years: '2020 – 2024',
    school: 'Manipal Institute of Technology',
    detail: 'B.Tech, Biotechnology · GPA 3.8',
  },
  {
    years: '2017 – 2020',
    school: 'Higher Secondary',
    detail: 'Science (PCB) · India',
  },
]

// ─── EXPERIENCE ───
export const experience = [
  {
    year: '2024',
    title: 'R&D Intern',
    detail: 'Developed formulations targeting hyperpigmentation; ran clinical & consumer trials.',
    org: 'Nivea Pvt Ltd, Mumbai',
  },
  {
    year: '2023',
    title: 'Research Intern',
    detail: 'Biosynthesis of Ag & Zn nanoparticles using eco-friendly plant extracts.',
    org: 'Manipal Institute of Technology',
  },
  {
    year: '2023',
    title: 'Social Media & Content Head',
    detail: 'Boosted engagement 45% and content impressions 75% across all platforms.',
    org: 'E-Cell, MIT Manipal',
  },
  {
    year: '2022',
    title: 'Clinical Research Intern',
    detail: 'Supported trial stages, data collection, documentation & protocol adherence.',
    org: 'Glenmark Pharmaceutical, Mumbai',
  },
]

export const experienceChips = ['Research', 'Strategy', 'Detail-oriented', 'Adaptability']

// ─── SELECTED WORK ───
export const projects = [
  {
    num: '01',
    name: 'Nanoparticle Biosynthesis',
    sub: 'Eco-friendly silver & zinc nanoparticle synthesis using plant extracts.',
    tags: ['Nanotech', 'Green Chemistry'],
  },
  {
    num: '02',
    name: 'Skin-of-Color Formulation',
    sub: 'Co-developed Nivea formulas targeting hyperpigmentation through consumer trials.',
    tags: ['R&D', 'Trials'],
  },
  {
    num: '03',
    name: 'E-Cell Social Strategy',
    sub: "Grew engagement 45% and impressions 75% for MIT Manipal's entrepreneurship cell.",
    tags: ['Social', 'Analytics'],
  },
  {
    num: '04',
    name: '225.in Traffic Growth',
    sub: 'PR campaigns that drove a 57% increase in website traffic and engagement.',
    tags: ['PR', 'SEO Content'],
  },
]

// ─── TECHNICAL SKILLS ───
// Short tags shown as little tool tiles (like the Ps / Ai / Id grid).
export const softwareTools = ['Bio', 'R', 'Cv', 'Py', 'Pr', 'Xl']

export const skillColumns = [
  {
    heading: 'Lab Techniques',
    items: ['PCR / qPCR', 'Cell Culture', 'Western Blotting', 'HPLC', 'SEM / XRD'],
  },
  {
    heading: 'Marketing & PR',
    items: ['Social Strategy', 'Content Creation', 'Branding', 'KPI Analytics', 'Canva'],
  },
]

export const skillChips = ['Research', 'Branding', 'Clinical Trials', 'Storytelling', 'Data Analysis']

// ─── LANGUAGES ───
export const languages = [
  { name: 'English', level: 'Fluent' },
  { name: 'Hindi', level: 'Native' },
  { name: 'Punjabi', level: 'Conversational' },
]

// ─── HOBBIES & INTERESTS ───
export const hobbies = [
  { icon: '🔬', label: 'Science\nCommunication' },
  { icon: '🎨', label: 'Digital Art\n& Design' },
  { icon: '📚', label: 'Reading\n& Writing' },
  { icon: '✈️', label: 'Travel\n& Culture' },
]
