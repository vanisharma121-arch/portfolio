// Content for the PM Playbook page.
//
// Everything here comes from the DMSB Dash Labs programme Vani ran as Product
// Manager (Apr–Jun 2026) and from the reports she produced for it: the 8-week
// sprint plan, the Sprints 1–3 Executive PM Report (06 May 2026), and the
// W17–W18 RA efficiency dashboard. Figures are quoted from those documents —
// don't invent new ones.

export const playbookMeta = {
  kicker: 'The PM Playbook',
  title: 'How I run a multi-product sprint programme.',
  subtitle:
    'Four AI products, eight sprints, eleven research assistants, and two hard milestones. These are the plays I actually used at DMSB Dash Labs — including the ones I learned the expensive way.',
  context:
    'From April 2026 I ran product management for DMSB Dash Labs: four AI-powered education tools built in parallel by a research-assistant team, against a demo milestone and a delivery milestone eight weeks apart. Everything below is drawn from the sprint plan, sprint reports, and efficiency dashboards I wrote for that programme.',
}

// ─── PROGRAMME AT A GLANCE ───
export const programStats = [
  { value: 4, suffix: '', label: 'Products in parallel', context: 'Essaybot · Press-Bot · Learn Autonomy · Learnbot' },
  { value: 8, suffix: '', label: 'Sprint programme', context: 'Weekly sprints, Apr 20 – Jun 30' },
  { value: 11, suffix: '', label: 'Research assistants', context: '20–35h weekly capacity each' },
  { value: 222, suffix: '', label: 'Tickets planned', context: 'across all four backlogs' },
]

// ─── THE SIX PLAYS ───
export const plays = [
  {
    num: '01',
    icon: '🗺️',
    title: 'Plan in themes, not ticket lists',
    body:
      'Every sprint in the eight-week plan got a single theme — Foundation, AI Services, RAG & Grading Engines, Chat & Bulk Processing, Grading Integration, Analytics & Demo Prep. Each of the four modules then had a focus inside that theme, so every product shipped something every sprint instead of taking turns.',
    evidence:
      'A theme makes the trade-off conversation possible. "Does this belong in RAG & Grading Engines?" is a question a team can answer; "is this important?" is not.',
  },
  {
    num: '02',
    icon: '📉',
    title: 'Track what carried forward, not just what closed',
    body:
      'Closure percentage on its own flatters a sprint. I tracked a carried-forward column beside every sprint, so debt stayed visible across sprint boundaries instead of quietly reappearing in the next backlog.',
    evidence:
      'Essaybot Sprint 1 closed 0 of 6 — the whole sprint carried. Learn Autonomy carried 20 tickets, then 13, then 4. Without that column, three consecutive "in progress" sprints look like movement.',
  },
  {
    num: '03',
    icon: '🚦',
    title: 'Cap WIP, and give every story an owner',
    body:
      'The most damaging pattern I found was not slowness — it was ten stories open at once with nobody named on any of them. Work in progress with no owner is work nobody is doing. I capped WIP at three per engineer and required owner assignment before sprint kickoff.',
    evidence:
      'Learn Autonomy had 10 LLM service stories simultaneously In Progress with no assignees, while the async task infrastructure they depended on had not been started at all.',
  },
  {
    num: '04',
    icon: '🛑',
    title: 'Separate "at risk" from "not started"',
    body:
      'These look similar on a status board and need completely different responses. At risk is a planning problem — rescope, resequence, cut. Not started is a resourcing problem, and no amount of replanning fixes it. Conflating them wastes the weeks you still had.',
    evidence:
      'Press-Bot ran three full sprints at 0 of 21 tickets, with no assignees and no commits. Its architecture and backlog were both ready — the gap was purely people. That needed an escalation, not a replan.',
  },
  {
    num: '05',
    icon: '⚖️',
    title: 'Measure capacity, not effort',
    body:
      'I scored throughput as completed tickets divided by available hours, not by hours logged. Hours logged measures diligence in filling in a timesheet. Done-per-available-hour measures whether the capacity we committed to actually converted into delivery.',
    evidence:
      'Team average landed at 0.178. The range ran from 0.325 down to 0.025, plus four people logging no hours at all — which is its own finding, and one you never see if you only look at totals.',
  },
  {
    num: '06',
    icon: '📄',
    title: 'Give executives one page and the decisions first',
    body:
      'Leadership does not need the ticket list. They need to know what ships, what does not, and which calls only they can make. My executive report opened with a milestone-readiness table and a Decisions Required block — before any of the detail.',
    evidence:
      'Four decisions, named and dated: assign Press-Bot engineers, rule on the Course Mechanics epic, set a WIP cap for LLM stories, and configure story points in Jira. Each one had a name and a deadline attached.',
  },
]

// ─── FIELD NOTES ───
export const fieldNotes = [
  {
    num: '1',
    title: 'A 100% sprint is a signal about ownership, not speed.',
    body:
      'Learnbot closed two consecutive sprints at 100% — full faculty and student auth, then the entire document-upload pipeline. It was not a faster team. It was the team where each story had exactly one owner and the epics were sequenced so nothing needed a decision mid-sprint.',
  },
  {
    num: '2',
    title: 'A declared proxy beats a missing metric.',
    body:
      'Story points were never configured in Jira, so a clean velocity number did not exist. Rather than report nothing, I used ticket-count velocity and labelled it as a proxy in the report itself. Naming the limitation is what makes the number safe to use.',
  },
  {
    num: '3',
    title: 'Infrastructure sprints look like failure on a burndown.',
    body:
      'Learn Autonomy Sprint 1 closed 25% of 92 tickets — and in the same sprint brought PostgreSQL, MinIO, Redis, Qdrant, Dokploy and Traefik SSL live across DEV, UAT and PROD, putting all three products on a real environment. Report the capability delivered, not just the count.',
  },
  {
    num: '4',
    title: 'Put the escalation in the same document as the wins.',
    body:
      'It is tempting to send good news broadly and bad news quietly. One report carried both: Learnbot at 100% and Press-Bot at zero, on facing pages. Splitting them trains people to discount whichever document they expect to be positive.',
  },
  {
    num: '5',
    title: 'Status without a named owner and a date is decoration.',
    body:
      'Every At Risk line in my reports resolved to a specific unblocking action — merge ESB-20, assign two engineers, cap WIP at three. A status colour that does not tell you who does what next is a colour, not a status.',
  },
]

// ─── ARTIFACTS ───
export const artifacts = [
  {
    name: 'Eight-week sprint plan',
    kind: 'Spreadsheet',
    body:
      'Sprint-by-sprint themes with a parallel focus lane for each of the four modules, plus shared infrastructure, feature-group counts and a cloud-readiness task per sprint.',
  },
  {
    name: 'Executive PM report',
    kind: 'Report · Sprints 1–3',
    body:
      'Milestone readiness, decisions required, per-product updates, and an appendix of sprint metrics, epic breakdowns and infrastructure status. Written for faculty leadership and technical stakeholders in one document.',
  },
  {
    name: 'RA efficiency dashboard',
    kind: 'Dashboard · W17–W18',
    body:
      'Assigned-versus-done per research assistant, throughput scored against available hours, and a summary table banding the team above and below average.',
  },
  {
    name: 'Epic & carried-forward tracker',
    kind: 'Tracker',
    body:
      'Every epic with its sprint, story count, completion percentage, status and an explicit carried-forward flag — the artifact that kept accumulating debt visible.',
  },
]

// ─── CASE FILE ───
export const caseFile = {
  label: 'Case file',
  title: 'Three sprints, zero delivery.',
  body: [
    'Press-Bot had a defined technical architecture, a loaded backlog of 21 tickets across three epics, and a clear milestone. After three full sprints it had zero completed tickets, zero commits, and no assignee on a single ticket.',
    'The instinct in that position is to replan — cut scope, move the milestone, rebuild the backlog. None of that would have helped, because nothing was wrong with the plan. The audio input, Whisper ASR transcription, and NLP feature extraction pipeline had simply never been started by anyone.',
    'So the report said exactly that, in those words, and asked for one thing: assign two engineers and start audio upload and transcription as P0. I marked the May 27 milestone at extreme risk in writing rather than carrying an optimistic status for another sprint.',
  ],
  takeaway:
    'Escalating early is unpopular for about a week. Escalating late is unpopular for the rest of the programme.',
}

// ─── FAQ ───
export const faqs = [
  {
    q: 'How do you keep four products moving at once without dropping one?',
    a: 'A shared sprint theme, and a named focus for every module inside it. Each product ships something every sprint rather than rotating attention between them, which means no backlog goes quiet long enough for problems to hide. The weakness of that model is that a resourcing gap on one product stays invisible unless you also track per-product delivery — which is why Press-Bot got its own line in every report.',
  },
  {
    q: 'What do you do when a team delivers nothing for three sprints?',
    a: 'Name it as a resourcing problem rather than a delivery problem, and escalate with a specific ask. Vague escalations ("Press-Bot needs attention") get acknowledged and forgotten. Specific ones ("assign two engineers, start audio upload and Whisper transcription as P0 in Sprint 4, or May 27 is unreachable") force a decision.',
  },
  {
    q: 'Story points or ticket counts?',
    a: 'Story points when they exist and the team estimates consistently. Ticket counts, labelled as a proxy, when they do not. What I would not do is wait for perfect instrumentation before reporting anything — three sprints of silence is worse than three sprints of an imperfect but honestly-labelled number.',
  },
  {
    q: 'How do you measure a research-assistant team fairly?',
    a: 'Against committed capacity, not against each other in raw totals. An RA at 20 hours a week and one at 35 are not comparable on tickets closed, so throughput is scored per available hour. It also surfaces the quieter finding: people with no logged hours at all, which is a management issue rather than a performance one.',
  },
  {
    q: 'What does your reporting cadence actually look like?',
    a: 'Weekly sprints with per-sprint completion tracked continuously, and a consolidated executive report at milestone checkpoints covering the sprints since the last one. The executive report leads with milestone readiness and decisions required; all detail goes to an appendix so that leadership and engineering can read the same document at different depths.',
  },
]
