import { jsPDF } from 'jspdf'
import type { Locale } from '../content/types'
import { resumeByLocale } from './resumeData'
import ptSansRegularUrl from './fonts/PTSans-Regular.ttf?url'
import ptSansBoldUrl from './fonts/PTSans-Bold.ttf?url'

const PAGE_WIDTH = 595.28
const PAGE_HEIGHT = 841.89
const MARGIN = 48
const CONTENT_WIDTH = PAGE_WIDTH - MARGIN * 2
const WINE = [140, 40, 65] as const
const INK = [30, 26, 27] as const
const DIM = [120, 110, 112] as const
const FONT = 'PTSans'

const CAT_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="50" viewBox="0 0 64 50">
  <path d="M14 30 Q10 10 22 8 L20 2 L28 8 Q32 6 36 8 L44 2 L42 8 Q54 10 50 30 Q50 40 32 40 Q14 40 14 30Z" fill="#8c283f"/>
  <circle cx="24" cy="24" r="2.4" fill="#fff"/>
  <circle cx="40" cy="24" r="2.4" fill="#fff"/>
  <path d="M50 28 Q62 20 60 34 Q56 38 48 34Z" fill="#8c283f"/>
</svg>`

function loadCatDataUrl(): Promise<string> {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => {
      const canvas = document.createElement('canvas')
      canvas.width = 64
      canvas.height = 50
      const ctx = canvas.getContext('2d')
      if (!ctx) return reject(new Error('no 2d context'))
      ctx.drawImage(img, 0, 0)
      resolve(canvas.toDataURL('image/png'))
    }
    img.onerror = reject
    img.src = `data:image/svg+xml;utf8,${encodeURIComponent(CAT_SVG)}`
  })
}

function arrayBufferToBase64(buffer: ArrayBuffer): string {
  const bytes = new Uint8Array(buffer)
  const chunkSize = 0x8000
  let binary = ''
  for (let i = 0; i < bytes.length; i += chunkSize) {
    binary += String.fromCharCode(...bytes.subarray(i, i + chunkSize))
  }
  return btoa(binary)
}

async function loadFontBase64(url: string): Promise<string> {
  const res = await fetch(url)
  const buffer = await res.arrayBuffer()
  return arrayBufferToBase64(buffer)
}

export async function downloadResumePdf(locale: Locale) {
  const resume = resumeByLocale[locale]

  const [catDataUrl, regularBase64, boldBase64] = await Promise.all([
    loadCatDataUrl(),
    loadFontBase64(ptSansRegularUrl),
    loadFontBase64(ptSansBoldUrl),
  ])

  const doc = new jsPDF({ unit: 'pt', format: 'a4' })
  doc.addFileToVFS('PTSans-Regular.ttf', regularBase64)
  doc.addFont('PTSans-Regular.ttf', FONT, 'normal')
  doc.addFileToVFS('PTSans-Bold.ttf', boldBase64)
  doc.addFont('PTSans-Bold.ttf', FONT, 'bold')
  doc.setFont(FONT, 'normal')

  let y = MARGIN
  let pageNum = 1

  function drawChrome() {
    doc.addImage(catDataUrl, 'PNG', MARGIN, 20, 20, 15.6)

    doc.addImage(catDataUrl, 'PNG', PAGE_WIDTH - MARGIN - 20, PAGE_HEIGHT - 36, 20, 15.6)
    doc.setFont(FONT, 'normal')
    doc.setFontSize(8)
    doc.setTextColor(...DIM)
    doc.text(String(pageNum), PAGE_WIDTH - MARGIN - 28, PAGE_HEIGHT - 25)
  }

  function newPage() {
    drawChrome()
    doc.addPage()
    pageNum++
    y = MARGIN + 22
  }

  function ensureSpace(needed: number) {
    if (y + needed > PAGE_HEIGHT - MARGIN - 44) newPage()
  }

  function heading(text: string) {
    ensureSpace(26)
    doc.setFont(FONT, 'bold')
    doc.setFontSize(13)
    doc.setTextColor(...WINE)
    doc.text(text, MARGIN, y)
    y += 18
  }

  function subheading(text: string, meta?: string) {
    ensureSpace(16)
    doc.setFont(FONT, 'bold')
    doc.setFontSize(10.5)
    doc.setTextColor(...INK)
    doc.text(text, MARGIN, y)
    if (meta) {
      const textWidth = doc.getTextWidth(text)
      doc.setFont(FONT, 'normal')
      doc.setFontSize(9)
      doc.setTextColor(...DIM)
      doc.text(meta, MARGIN + textWidth + 10, y)
    }
    y += 14
  }

  function paragraph(text: string, opts: { size?: number; color?: readonly [number, number, number] } = {}) {
    doc.setFont(FONT, 'normal')
    doc.setFontSize(opts.size ?? 10)
    doc.setTextColor(...(opts.color ?? INK))
    const lines = doc.splitTextToSize(text, CONTENT_WIDTH) as string[]
    for (const line of lines) {
      ensureSpace(13)
      doc.text(line, MARGIN, y)
      y += 13
    }
  }

  function bullets(items: string[]) {
    doc.setFont(FONT, 'normal')
    doc.setFontSize(9.5)
    doc.setTextColor(...INK)
    for (const item of items) {
      const lines = doc.splitTextToSize(item, CONTENT_WIDTH - 16) as string[]
      ensureSpace(13 * lines.length)
      doc.text('•', MARGIN + 4, y)
      doc.text(lines, MARGIN + 16, y)
      y += 13 * lines.length
    }
    y += 4
  }

  function countLines(text: string, width: number, size: number) {
    doc.setFont(FONT, 'normal')
    doc.setFontSize(size)
    return (doc.splitTextToSize(text, width) as string[]).length
  }

  function projectBlockHeight(proj: { summary?: string; bullets: string[]; techStack?: string }) {
    let h = 16
    if (proj.summary) h += countLines(proj.summary, CONTENT_WIDTH, 10) * 13
    for (const item of proj.bullets) h += countLines(item, CONTENT_WIDTH - 16, 9.5) * 13
    if (proj.bullets.length) h += 4
    if (proj.techStack) h += countLines(proj.techStack, CONTENT_WIDTH, 8.5) * 13
    return h
  }

  doc.setFont(FONT, 'bold')
  doc.setFontSize(20)
  doc.setTextColor(...INK)
  doc.text(resume.name, MARGIN, y)
  y += 22
  doc.setFont(FONT, 'normal')
  doc.setFontSize(11)
  doc.setTextColor(...WINE)
  doc.text(resume.title, MARGIN, y)
  y += 20

  paragraph(resume.summary)
  y += 6

  for (const group of resume.skillGroups) {
    ensureSpace(14)
    doc.setFont(FONT, 'bold')
    doc.setFontSize(9.5)
    doc.setTextColor(...INK)
    const labelText = `${group.label}: `
    doc.text(labelText, MARGIN, y)
    const labelWidth = doc.getTextWidth(labelText)
    doc.setFont(FONT, 'normal')
    const lines = doc.splitTextToSize(group.value, CONTENT_WIDTH - labelWidth) as string[]
    doc.text(lines[0], MARGIN + labelWidth, y)
    y += 12
    for (let i = 1; i < lines.length; i++) {
      ensureSpace(12)
      doc.text(lines[i], MARGIN, y)
      y += 12
    }
  }
  y += 4
  paragraph(resume.openToRelocation, { size: 9, color: DIM })
  y += 10

  heading(resume.experienceHeading)
  subheading(resume.experience.company)
  doc.setFont(FONT, 'bold')
  doc.setFontSize(10.5)
  doc.setTextColor(...INK)
  doc.text(resume.experience.role, MARGIN, y)
  const roleWidth = doc.getTextWidth(resume.experience.role)
  doc.setFont(FONT, 'normal')
  doc.setFontSize(9)
  doc.setTextColor(...DIM)
  doc.text(resume.experience.period, MARGIN + roleWidth + 10, y)
  y += 13
  paragraph(resume.experience.techStack, { size: 8.5, color: DIM })
  y += 6

  for (const proj of resume.experience.projects) {
    ensureSpace(projectBlockHeight(proj))
    subheading(proj.title)
    if (proj.summary) paragraph(proj.summary)
    bullets(proj.bullets)
  }

  y += 6
  heading(resume.educationHeading)
  for (const edu of resume.education) {
    const eduHeight =
      16 +
      countLines(edu.degree, CONTENT_WIDTH, 9.5) * 13 +
      countLines(edu.credential, CONTENT_WIDTH, 9) * 13 +
      countLines(edu.note, CONTENT_WIDTH, 8.5) * 13
    ensureSpace(eduHeight)
    subheading(edu.institution, edu.period)
    paragraph(edu.degree, { size: 9.5 })
    paragraph(edu.credential, { size: 9, color: DIM })
    paragraph(edu.note, { size: 8.5, color: DIM })
    y += 6
  }
  if (resume.courses.length) {
    let coursesHeight = 13
    for (const course of resume.courses) coursesHeight += countLines(course, CONTENT_WIDTH - 16, 9.5) * 13
    ensureSpace(coursesHeight)
    doc.setFont(FONT, 'bold')
    doc.setFontSize(9)
    doc.setTextColor(...INK)
    doc.text(resume.coursesLabel, MARGIN, y)
    y += 13
    bullets(resume.courses)
  }

  y += 6
  heading(resume.personalProjectsHeading)
  for (const proj of resume.personalProjects) {
    ensureSpace(projectBlockHeight(proj))
    subheading(proj.title, proj.status)
    if (proj.summary) paragraph(proj.summary)
    bullets(proj.bullets)
    paragraph(proj.techStack, { size: 8.5, color: DIM })
    y += 6
  }

  drawChrome()
  const fileName = resume.name.replace(/\s+/g, '_')
  doc.save(locale === 'ru' ? `${fileName}_резюме.pdf` : `${fileName}_CV.pdf`)
}
