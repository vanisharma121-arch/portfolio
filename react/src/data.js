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
  { href: 'playbook/', label: 'PM Playbook', external: true },
]

// ─── HERO ───
export const profile = {
  name: 'Vani Sharma',
  firstName: 'Vani',
  tagline: 'Product & Program Management · Life Sciences & Biotech',
  headline: 'Science, shipped.',
  subhead:
    'Product and program manager pairing wet-lab R&D — CRISPR, dermatological clinical studies — with the delivery of AI-powered life-sciences tools. I move programs from stakeholder requirements to launch, and turn scientific work into decision-ready reporting.',
  bio: 'MS Biotechnology candidate at Northeastern University and Product Manager at the D’Amore-McKim AI Strategic Hub, where I lead delivery across six concurrent AI-product programs. My background runs from CRISPR and mammalian cell culture to GCP-aligned clinical studies — which is what lets me sit between the science and the schedule.',
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
  { value: 91, suffix: '%', label: 'On-time experiment starts', context: 'up from 68% · Neoclease' },
  { value: 34, suffix: '%', label: 'Lab throughput lift', context: 'after introducing Jira Kanban' },
  { value: 3, suffix: '', label: 'GCP-aligned clinical studies', context: 'n≈120 · Beiersdorf (NIVEA)' },
]

// ─── HOW I WORK ───
// Mirrors the three movements in the resume summary: rigour at the bench,
// delivery of programs, and reporting leadership can act on.
export const howCards = [
  {
    num: '01',
    icon: '🧬',
    title: 'Rigour at the bench',
    detail:
      'CRISPR gene editing, mammalian cell culture and GCP-aligned dermatological studies. I set the data-quality and validation standards that decide whether downstream analysis is worth trusting.',
  },
  {
    num: '02',
    icon: '🗂️',
    title: 'Programs that land',
    detail:
      'Sprint planning, backlog and dependency management across concurrent programs — keeping milestones honest against the baseline plan rather than against optimism.',
  },
  {
    num: '03',
    icon: '📊',
    title: 'Decision-ready reporting',
    detail:
      'Dashboards and executive templates that give leadership early visibility into risk. Scientific work is only useful once someone can make a call from it.',
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
      'Lead delivery across six concurrent AI-product programs, owning sprint planning, backlog and dependency management. Built the program dashboards and executive reporting templates now used across the hub.',
  },
  {
    year: '2025',
    title: 'Research Associate',
    org: 'Neoclease, Tufts Launchpad Biolabs · Boston, MA',
    detail:
      'Introduced Jira Kanban to research operations, lifting on-time experiment starts from 68% to 91% and raising lab throughput 34%. Set data-quality standards for AI/ML models on CRISPR cell and gene therapy datasets.',
  },
  {
    year: '2024',
    title: 'R&D Associate',
    org: 'Beiersdorf Pvt. Ltd. (NIVEA) · Mumbai, India',
    detail:
      'Ran three GCP-aligned dermatological efficacy studies (n≈120) measuring TEWL, erythema and pigmentation endpoints, and built the Tableau dashboards that turned raw efficacy data into decision-ready reporting.',
  },
]

export const experienceChips = ['Program delivery', 'ICH-GCP', 'Stakeholder alignment', 'Executive reporting']

// ─── SELECTED WORK ───
export const projects = [
  {
    num: '01',
    name: 'ICU Simulator',
    sub: 'Sanara Healthcare partnership — EHR documentation support for clinicians.',
    detail:
      'Led the Sanara Healthcare partnership from relationship into technical specifications and validation criteria, aligning four stakeholder groups on scope for an ICU simulator that helps doctors with EHR documentation.',
    tags: ['Partnership', 'Requirements', 'Healthcare AI'],
  },
  {
    num: '02',
    name: 'Svastha (HealthVault)',
    sub: 'Decentralized health-data platform, selected into Harvard Innovation Labs.',
    detail:
      'Business Operations Lead for an early-stage decentralized health-data startup, earning selection into the Harvard Innovation Labs (Foundry) accelerator. Ran market and competitive analysis to size the opportunity, define target segments and shape the product roadmap.',
    tags: ['Go-to-market', 'Strategy', 'Harvard iLab'],
  },
  {
    num: '03',
    name: 'Genomic Data Pipelines',
    sub: 'Analysis-ready datasets for gene-therapy classification at Neoclease.',
    detail:
      'Built genomic data-extraction pipelines producing analysis-ready datasets for gene-therapy classification, standardising how the team handled sequencing outputs — and set the validation standards that kept AI/ML inputs at clinical-grade structure.',
    tags: ['CRISPR', 'Data Pipelines', 'Validation'],
  },
  {
    num: '04',
    name: 'Dermatological Efficacy Studies',
    sub: 'Three GCP-aligned studies at NIVEA, reported through Tableau.',
    detail:
      'Three GCP-aligned efficacy studies (n≈120) measuring TEWL, erythema and pigmentation endpoints to ICH-GCP standards, with documentation across four product development workstreams kept audit-ready from formulation through study close.',
    tags: ['ICH-GCP', 'Clinical Studies', 'Tableau'],
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
