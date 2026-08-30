// Central content for the portfolio. Edit copy/data here — the components are
// purely presentational.
//
// Every metric in this file is taken from Vani's CV. Nothing here is invented:
// the "stats" the site animates are real, verifiable outcomes, which is why the
// gamification rewards *exploring the site* rather than rating her skills.

export const navLinks = [
  { href: '#approach', label: 'Approach' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#work', label: 'Work' },
  { href: '#resume', label: 'Resume' },
  { href: 'playbook/', label: 'PM Playbook', external: true },
]

// ─── HERO ───
export const profile = {
  name: 'Vani Sharma',
  firstName: 'Vani',
  tagline: 'Biotechnology Researcher & Brand Strategist',
  headline: 'Science, told well.',
  subhead:
    'MS Biotechnology candidate at Northeastern, working where rigorous lab science meets brand strategy — and translating one into the other.',
  bio: 'I am an MS Biotechnology candidate at Northeastern University, bridging lab science and brand strategy. From clinical R&D at Nivea to social campaigns that grew engagement 45%, I love turning complex science into clear, human stories.',
  linkedin: 'linkedin.com/in/vanisharma',
  linkedinUrl: 'https://www.linkedin.com/in/vanisharma',
  badge: 'MS Biotech · 2026',
  nationality: 'Indian',
  cv: 'Vani_Sharma_CV.pdf',
  photo: 'photo.jpg',
  contact: {
    location: 'Boston, MA',
    email: 'sharma.vani1@northeastern.edu',
    phone: '+1 (857) 396-8591',
  },
}

// ─── HEADLINE STATS ─── (animated counters; all from the CV)
export const stats = [
  { value: 45, suffix: '%', label: 'Engagement growth', context: 'E-Cell, MIT Manipal' },
  { value: 75, suffix: '%', label: 'Content impressions', context: 'across all platforms' },
  { value: 57, suffix: '%', label: 'Website traffic lift', context: '225.in PR campaigns' },
  { value: 4, suffix: '', label: 'Research & industry roles', context: 'Nivea · Glenmark · MIT' },
]

// ─── HOW I WORK ───
export const howCards = [
  {
    num: '01',
    icon: '🔬',
    title: 'Research & Analysis',
    detail:
      'From nanoparticle biosynthesis to clinical trials, I apply rigorous scientific method to extract meaningful insights from complex experimental data.',
  },
  {
    num: '02',
    icon: '📣',
    title: 'Strategy & Branding',
    detail:
      'I design data-driven social media strategies and PR campaigns that have boosted website traffic by 57% and grown engagement by 45%.',
  },
  {
    num: '03',
    icon: '🚀',
    title: 'Execution & Growth',
    detail:
      'From consumer trials at Nivea to leading content teams, I deliver projects on time with measurable outcomes and clear KPI reporting.',
  },
]

// ─── EDUCATION ───
export const education = [
  { years: '2024 – 2026', school: 'Northeastern University, Boston', detail: 'MS, Biotechnology' },
  { years: '2020 – 2024', school: 'Manipal Institute of Technology', detail: 'B.Tech, Biotechnology · GPA 3.8' },
  { years: '2017 – 2020', school: 'Higher Secondary', detail: 'Science (PCB) · India' },
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
    detail:
      'Green-chemistry route to Ag and Zn nanoparticles using plant extracts as reducing agents, characterised by SEM and XRD — removing the harsh solvents conventional synthesis depends on.',
    tags: ['Nanotech', 'Green Chemistry'],
  },
  {
    num: '02',
    name: 'Skin-of-Color Formulation',
    sub: 'Co-developed Nivea formulas targeting hyperpigmentation through consumer trials.',
    detail:
      'Formulation work against hyperpigmentation for deeper skin tones, validated through structured clinical and consumer trials with documented protocol adherence.',
    tags: ['R&D', 'Trials'],
  },
  {
    num: '03',
    name: 'E-Cell Social Strategy',
    sub: "Grew engagement 45% and impressions 75% for MIT Manipal's entrepreneurship cell.",
    detail:
      'Led content and social strategy for the entrepreneurship cell: rebuilt the content calendar around analytics, grew engagement 45% and impressions 75%.',
    tags: ['Social', 'Analytics'],
  },
  {
    num: '04',
    name: '225.in Traffic Growth',
    sub: 'PR campaigns that drove a 57% increase in website traffic and engagement.',
    detail:
      'PR and earned-media campaigns built around a clear editorial angle, driving a 57% increase in site traffic and sustained engagement.',
    tags: ['PR', 'SEO Content'],
  },
]

// ─── SKILLS ───
export const skillColumns = [
  {
    heading: 'Lab Techniques',
    icon: '🧬',
    items: ['PCR / qPCR', 'Cell Culture', 'Western Blotting', 'HPLC', 'SEM / XRD'],
  },
  {
    heading: 'Marketing & PR',
    icon: '📊',
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
  { icon: '🔬', label: 'Science Communication' },
  { icon: '🎨', label: 'Digital Art & Design' },
  { icon: '📚', label: 'Reading & Writing' },
  { icon: '✈️', label: 'Travel & Culture' },
]

// ─── CONTACT ───
export const contactLinks = [
  { label: 'Email', value: profile.contact.email, href: `mailto:${profile.contact.email}`, icon: '✉' },
  { label: 'Phone', value: profile.contact.phone, href: `tel:+18573968591`, icon: '☎' },
  { label: 'LinkedIn', value: profile.linkedin, href: profile.linkedinUrl, icon: 'in' },
  { label: 'Location', value: profile.contact.location, href: null, icon: '◎' },
]

// ─── ACHIEVEMENTS (gamification) ───
// Unlocked by exploring the site. Order here is the order shown in the trophy tray.
export const achievements = [
  { id: 'arrive',    name: 'First Contact',    hint: 'Land on the site',                    xp: 10, icon: '🚀' },
  { id: 'approach',  name: 'Methodical',       hint: 'Read how Vani works',                 xp: 15, icon: '🧭' },
  { id: 'skills',    name: 'Lab Access',       hint: 'Inspect the skill set',               xp: 15, icon: '🧬' },
  { id: 'experience',name: 'Time Traveller',   hint: 'Walk the full timeline',              xp: 20, icon: '⏳' },
  { id: 'work',      name: 'Case Study',       hint: 'Open a project',                      xp: 20, icon: '🔍' },
  { id: 'allwork',   name: 'Completionist',    hint: 'Open every project',                  xp: 30, icon: '🏅' },
  { id: 'resume',    name: 'Paper Trail',      hint: 'Reach the resume',                    xp: 15, icon: '📄' },
  { id: 'cv',        name: 'Recruiter Mode',   hint: 'Download the CV',                     xp: 25, icon: '💼' },
  { id: 'playbook',  name: 'Playbook Opened',  hint: 'Open the PM Playbook',                xp: 20, icon: '📘' },
  { id: 'plays',     name: 'Student of the Game', hint: 'Read all six plays',               xp: 30, icon: '🎯' },
  { id: 'konami',    name: 'Easter Egg',       hint: 'Some secrets are keyed in',           xp: 50, icon: '🥚' },
]

export const LEVELS = [
  { name: 'Visitor',     at: 0 },
  { name: 'Curious',     at: 25 },
  { name: 'Researcher',  at: 60 },
  { name: 'Collaborator',at: 110 },
  { name: 'Recruiter',   at: 170 },
]
