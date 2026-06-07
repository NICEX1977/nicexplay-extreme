import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const { title, excerpt, category, cover_url } = await req.json()

  const titleShort = title.length > 50 ? title.slice(0, 50) + '...' : title
  const excerptShort = excerpt ? (excerpt.length > 80 ? excerpt.slice(0, 80) + '...' : excerpt) : ''

  const svg = `
<svg width="1080" height="1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#0a0a0a" stop-opacity="0.3"/>
      <stop offset="50%" stop-color="#0a0a0a" stop-opacity="0.85"/>
      <stop offset="100%" stop-color="#0a0a0a" stop-opacity="1"/>
    </linearGradient>
  </defs>

  <!-- Fondo negro -->
  <rect width="1080" height="1080" fill="#0a0a0a"/>

  <!-- Imagen de portada -->
  ${cover_url ? `<image href="${cover_url}" width="1080" height="1080" preserveAspectRatio="xMidYMid slice" opacity="0.45"/>` : ''}

  <!-- Gradiente -->
  <rect width="1080" height="1080" fill="url(#grad)"/>

  <!-- Borde decorativo superior -->
  <rect width="1080" height="6" fill="#a855f7"/>

  <!-- Categoría -->
  <text x="60" y="720" font-family="Arial" font-size="30" font-weight="bold" fill="#a855f7">${category.toUpperCase()}</text>

  <!-- Línea decorativa -->
  <rect x="60" y="735" width="80" height="3" fill="#a855f7"/>

  <!-- Título línea 1 -->
  <text x="60" y="800" font-family="Arial" font-size="52" font-weight="bold" fill="#ffffff">${titleShort.slice(0, 25)}</text>
  <!-- Título línea 2 -->
  <text x="60" y="865" font-family="Arial" font-size="52" font-weight="bold" fill="#ffffff">${titleShort.slice(25)}</text>

  <!-- Excerpt -->
  <text x="60" y="930" font-family="Arial" font-size="26" fill="#9ca3af">${excerptShort}</text>

  <!-- Logo NICEXPLAY -->
  <text x="60" y="1030" font-family="Arial" font-size="38" font-weight="bold" fill="#FF2020">NICE</text>
  <text x="172" y="1030" font-family="Arial" font-size="38" font-weight="bold" fill="#00CFFF">X</text>
  <text x="202" y="1030" font-family="Arial" font-size="38" font-weight="bold" fill="#ffffff">PLAY</text>
  <text x="330" y="1030" font-family="Arial" font-size="22" font-weight="bold" fill="#FFB800">EXTREME</text>

  <!-- URL -->
  <text x="850" y="1030" font-family="Arial" font-size="24" fill="#3A4568">nicexplay.lat</text>
</svg>`

  return new NextResponse(svg, {
    headers: {
      'Content-Type': 'image/svg+xml',
      'Content-Disposition': 'attachment; filename="nicexplay-instagram.svg"'
    }
  })
}