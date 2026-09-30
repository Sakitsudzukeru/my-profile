export type Locale = 'ru' | 'en'

export interface NavLink {
  href: string
  label: string
}

export type SocialId = 'github' | 'instagram' | 'linkedin' | 'email'

export interface SocialLink {
  id: SocialId
  title: string
  href: string
}

export interface ConsoleLine {
  symbol: string
  text: string
  tone: 'default' | 'warn' | 'ok'
  symbolAccent?: boolean
}

export interface CodeSingle {
  kind: 'single'
  filename: string
  html: string
}

export interface CodeTabs {
  kind: 'tabs'
  tabs: { label: string; html: string }[]
}

export type ProjectCode = CodeSingle | CodeTabs

export type ProjectResult =
  | { kind: 'console'; lines: ConsoleLine[] }
  | { kind: 'stats'; stats: { num: string; label: string }[] }
  | { kind: 'chat'; bubble: string; meta: string }
  | { kind: 'live'; text: string }
  | { kind: 'game' }
  | { kind: 'memory' }
  | { kind: 'whack' }

export interface ShowcaseProject {
  id: string
  tabLabel: string
  status: string
  title: string
  description: string
  stack: string[]
  githubUrl?: string
  code?: ProjectCode
  result?: ProjectResult
}

export interface TimelineHighlight {
  label: string
  bullets: string[]
}

export interface EducationItem {
  institution: string
  degree: string
  credential: string
  period: string
  note: string
}

export interface TimelineItem {
  when: string
  title: string
  company: string
  description: string
  highlights: TimelineHighlight[]
}

export type FactIconName =
  | 'bolt'
  | 'network'
  | 'rocket'
  | 'award'
  | 'clipboard'
  | 'trending'
  | 'bot'
  | 'berry'
  | 'palette'
  | 'cat'
  | 'pin'
  | 'plane'
  | 'car'
  | 'sparkle'

export interface AboutFact {
  icon: FactIconName
  text: string
}

export interface GalleryItem {
  image: string
  caption: string
}

export interface SkillGroup {
  label: string
  tiles: string[]
}

export interface SiteContent {
  navLinks: NavLink[]
  socialLinks: SocialLink[]
  logo: { base: string; accent: string }
  cvButtonLabel: string
  cvShortButtonLabel: string
  hero: {
    eyebrow: string
    titleWhite: string
    titlePink: string
    subtitle: string
    ctaPrimary: string
    sticker1: string
    sticker2: string
  }
  skillsStickerText: string
  liveStickerText: string
  projectsSectionTitle: string
  codeOnGithubText: string
  seeGalleryText: string
  showcaseProjects: ShowcaseProject[]
  gallery: { sectionTitle: string; subtitle: string; items: GalleryItem[] }
  skillsSectionTitle: string
  skillGroups: SkillGroup[]
  experienceSectionTitle: string
  timeline: TimelineItem[]
  aboutSectionTitle: string
  aboutText: string
  aboutFacts: AboutFact[]
  personalFacts: AboutFact[]
  educationSectionTitle: string
  education: EducationItem[]
  coursesLabel: string
  courses: string[]
  footer: {
    headingBefore: string
    headingAfter: string
    headingHighlight: string
    email: string
    location: string
    stickyLine1: string
    stickyLine2: string
  }
  footerBottom: string
  common: { scoreLabel: string; bestLabel: string }
  runner: { startHint: string; gameOverText: string; restartHint: string }
  memory: { movesLabel: string; winText: string; playAgainHint: string }
  whack: { startHint: string; timeLabel: string; gameOverText: string; restartHint: string }
}

export interface Dictionary {
  nav: { about: string; work: string; gallery: string; experience: string; skills: string; contact: string }
  hero: {
    eyebrow: string
    titleWhite: string
    titlePink: string
    subtitle: string
    ctaPrimary: string
    sticker1: string
    sticker2: string
  }
  skillsStickerText: string
  liveStickerText: string
  projectsSectionTitle: string
  codeOnGithubText: string
  seeGalleryText: string
  gallery: { sectionTitle: string; subtitle: string; captions: string[] }
  projects: {
    langLib: { tabLabel: string; status: string; title: string; description: string }
    flashcards: { tabLabel: string; status: string; title: string; description: string }
    cdrParser: { tabLabel: string; status: string; title: string; description: string }
    moderation: { tabLabel: string; status: string; title: string; description: string }
    sticker: {
      tabLabel: string
      status: string
      title: string
      description: string
      cssComment: string
      htmlComment: string
      reactComment: string
    }
    catRunner: { tabLabel: string; status: string; title: string; description: string }
    memoryGame: { tabLabel: string; status: string; title: string; description: string }
    whackAMole: { tabLabel: string; status: string; title: string; description: string }
  }
  skillsSectionTitle: string
  skillGroupLabels: { backend: string; frontend: string; mobile: string; data: string; devops: string }
  experienceSectionTitle: string
  timeline: TimelineItem[]
  aboutSectionTitle: string
  aboutText: string
  aboutFacts: AboutFact[]
  personalFacts: AboutFact[]
  educationSectionTitle: string
  education: EducationItem[]
  coursesLabel: string
  courses: string[]
  footer: { headingBefore: string; headingAfter: string; headingHighlight: string; location: string; stickyLine1: string; stickyLine2: string }
  footerBottom: string
  common: { scoreLabel: string; bestLabel: string }
  runner: { startHint: string; gameOverText: string; restartHint: string }
  memory: { movesLabel: string; winText: string; playAgainHint: string }
  whack: { startHint: string; timeLabel: string; gameOverText: string; restartHint: string }
}
