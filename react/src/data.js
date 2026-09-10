// Central content for the portfolio. Edit copy/data here — the components are
// purely presentational.
//
// Source of truth: Vani's resume (August 2026 version, mirrored at
// public/Vani_Sharma_CV.pdf). Every metric below is quoted from it — the site
// gamifies *exploring the page*, never her credentials, so don't invent figures
// or proficiency ratings.

export const navLinks = [
  { href: '#approach', label: 'Approach' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#work', label: 'Work' },
  { href: '#resume', label: 'Resume' },
  { href: 'https://vanisharma121-arch.github.io/product-playbook/', label: 'PM Playbook', external: true },
]

// ─── HERO ───
export const profile = {
  name: 'Vani Sharma',
  firstName: 'Vani',
  tagline: 'Product & Program Management · Life Sciences & Biotech',
  headline: 'Science, shipped.',
  subhead:
    'I am a product and program manager in life sciences. My laboratory work includes CRISPR and clinical studies. I move each program from stakeholder requirements to launch, and I make reports that managers can act on.',
  linkedin: 'linkedin.com/in/vanisharma',
  linkedinUrl: 'https://www.linkedin.com/in/vanisharma',
  badge: 'MS Biotech · Dec 2026',
  cv: 'Vani_Sharma_CV.pdf',
  photo: 'photo.jpg',
  contact: {
    location: 'Boston, MA',
    email: 'sharma.vani1@northeastern.edu',
    phone: '+1 (857) 396-8591',
  },
}

// ─── HEADLINE STATS ─── (animated counters; all quoted from the resume)
export const stats = [
  { value: 6, suffix: '', label: 'Concurrent AI programs', context: 'D’Amore-McKim AI Strategic Hub' },
  { value: 91, suffix: '%', label: 'On-time experiment starts', context: 'Increase from 68% · Neoclease' },
  { value: 34, suffix: '%', label: 'Laboratory output increase', context: 'After I introduced Jira Kanban' },
  { value: 3, suffix: '', label: 'GCP-aligned clinical studies', context: 'n≈120 · Beiersdorf (NIVEA)' },
]

// ─── HOW I WORK ───
// Mirrors the three movements in the resume summary: rigour at the bench,
// delivery of programs, and reporting leadership can act on.
export const howCards = [
  {
    num: '01',
    icon: '🧬',
    title: 'Rigor in the laboratory',
    detail:
      'I do CRISPR gene editing, mammalian cell culture, and dermatological studies to GCP standards. I also set the standards for data quality and validation. These standards make sure that the later analysis is correct.',
  },
  {
    num: '02',
    icon: '🗂️',
    title: 'Program delivery',
    detail:
      'I plan the sprints and manage the backlog and the dependencies for programs that run at the same time. I compare each milestone to the baseline plan.',
  },
  {
    num: '03',
    icon: '📊',
    title: 'Reports for decisions',
    detail:
      'I build dashboards and report templates for managers. These show risks early. Scientific work is only useful when a manager can make a decision from it.',
  },
]

// ─── EDUCATION ───
export const education = [
  {
    years: 'Expected Dec 2026',
    school: 'Northeastern University, Boston',
    detail: 'M.S., Biotechnology · GPA 3.8/4.0',
    coursework:
      'Biotechnology Enterprise · Biostatistics · R Programming · Healthcare Project Management · Emerging Market Studies',
  },
  {
    years: 'May 2024',
    school: 'Manipal Institute of Technology',
    detail: 'B.Tech, Biotechnology · Minor in Environmental Biotechnology · GPA 3.6/4.0',
    coursework: 'Bioinformatics · Bioreaction Engineering · Environmental Biotechnology',
  },
]

// ─── EXPERIENCE ───
export const experience = [
  {
    year: '2025 — Present',
    title: 'Product Manager',
    org: 'D’Amore-McKim AI Strategic Hub (DASH) · Boston, MA',
    detail:
      'I lead delivery for six AI product programs at the same time. I own the sprint plan, the backlog, and the dependencies. I also built the program dashboards and the report templates that the hub now uses.',
  },
  {
    year: '2025',
    title: 'Research Associate',
    org: 'Neoclease, Tufts Launchpad Biolabs · Boston, MA',
    detail:
      'I introduced Jira Kanban to research operations. On-time experiment starts increased from 68% to 91%, and laboratory output increased by 34%. I also set data quality standards for the AI models that use CRISPR cell and gene therapy data.',
  },
  {
    year: '2024',
    title: 'R&D Associate',
    org: 'Beiersdorf Pvt. Ltd. (NIVEA) · Mumbai, India',
    detail:
      'I ran three dermatological efficacy studies to GCP standards, with approximately 120 participants. The studies measured TEWL, erythema, and pigmentation. I built the Tableau dashboards that show the results.',
  },
]

export const experienceChips = ['Program delivery', 'ICH-GCP', 'Stakeholder alignment', 'Executive reporting']

// ─── SELECTED WORK ───
export const projects = [
  {
    num: '01',
    name: 'Svastha (HealthVault)',
    sub: 'This is a decentralized health data platform. Harvard Innovation Labs selected it.',
    detail:
      'I am the Business Operations Lead for an early-stage health data startup. The Harvard Innovation Labs Foundry accelerator selected the company. I did the market and competitor analysis. That analysis set the target segments and the product roadmap.',
    url: 'https://getsvastha.com/',
    urlLabel: 'getsvastha.com',
    tags: ['Go-to-market', 'Strategy', 'Harvard iLab'],
  },
  {
    num: '02',
    name: 'The PM Playbook',
    sub: 'This playbook shows eight product capabilities, from scientific evidence to product decisions.',
    detail:
      'The playbook has eight capabilities: discover, decide, deliver, and more. The order follows how a team makes product decisions, not the project that each example came from. It uses data from more than 4 AI products and more than 400 delivery tickets. It also uses a controlled study with 111 participants.',
    url: 'https://vanisharma121-arch.github.io/product-playbook/',
    urlLabel: 'Read the playbook',
    tags: ['Program Management', 'Reporting', 'Case Study'],
  },
]

// ─── SKILLS ───
export const skillColumns = [
  {
    heading: 'Product & Program',
    icon: '🗂️',
    items: [
      'Sprint planning',
      'Backlog & milestone tracking',
      'Cross-functional coordination',
      'Stakeholder management',
      'Jira · Smartsheet',
    ],
  },
  {
    heading: 'Clinical & Regulatory',
    icon: '📋',
    items: [
      'ICH-GCP',
      'SOP development & compliance',
      'Protocol & CRF review',
      'Regulatory documentation',
      'Clinical data validation',
    ],
  },
  {
    heading: 'Data & Analytics',
    icon: '📊',
    items: [
      'Python · SQL · R',
      'Tableau',
      'Data cleaning & trending',
      'Statistical modeling',
      'Dashboard development',
    ],
  },
  {
    heading: 'Laboratory & Domain',
    icon: '🧬',
    items: [
      'CRISPR gene editing',
      'Mammalian cell culture (HEK293T, K562)',
      'PCR / qPCR · DNA extraction',
      'Western blot',
      'TEWL · erythema · pigmentation endpoints',
    ],
  },
]

export const skillChips = [
  'Program delivery',
  'Clinical compliance',
  'Dashboard development',
  'Stakeholder alignment',
  'Executive reporting',
]

// ─── LANGUAGES ───
export const languages = [
  { name: 'English', level: 'Fluent' },
  { name: 'Hindi', level: 'Native' },
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
  { id: 'arrive',    name: 'First Contact',    hint: 'Open the site',                    xp: 10, icon: '🚀' },
  { id: 'approach',  name: 'Methodical',       hint: 'Read the approach section',                 xp: 15, icon: '🧭' },
  { id: 'skills',    name: 'Lab Access',       hint: 'Open the skills section',               xp: 15, icon: '🧬' },
  { id: 'experience',name: 'Time Traveller',   hint: 'Read all of the experience',              xp: 20, icon: '⏳' },
  { id: 'work',      name: 'Case Study',       hint: 'Open a project link',                      xp: 20, icon: '🔍' },
  { id: 'allwork',   name: 'Completionist',    hint: 'Open both project links',                  xp: 30, icon: '🏅' },
  { id: 'resume',    name: 'Paper Trail',      hint: 'Open the resume section',                    xp: 15, icon: '📄' },
  { id: 'cv',        name: 'Recruiter Mode',   hint: 'Download the CV',                     xp: 25, icon: '💼' },
  { id: 'playbook',  name: 'Playbook Opened',  hint: 'Open the PM Playbook',                xp: 20, icon: '📘' },
  { id: 'plays',     name: 'Student of the Game', hint: 'Read all six plays',               xp: 30, icon: '🎯' },
  { id: 'konami',    name: 'Easter Egg',       hint: 'Type the classic key sequence',           xp: 50, icon: '🥚' },
]

export const LEVELS = [
  { name: 'Visitor',     at: 0 },
  { name: 'Curious',     at: 25 },
  { name: 'Researcher',  at: 60 },
  { name: 'Collaborator',at: 110 },
  { name: 'Recruiter',   at: 170 },
]
