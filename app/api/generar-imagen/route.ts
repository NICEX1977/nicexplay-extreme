 import { NextResponse } from 'next/server'
import sharp from 'sharp'

export async function POST(req: Request) {
  const { title, excerpt, category, cover_url } = await req.json()

  try {
    const width = 1080
    const height = 1080

    // Descargar imagen de portada
    let coverBuffer: Buffer | null = null
    if (cover_url) {
      try {
        const res = await fetch(cover_url)
        const arrayBuffer = await res.arrayBuffer()
        coverBuffer = Buffer.from(arrayBuffer)
      } catch (e) {
        console.error('Error descargando imagen:', e)
      }
    }

    // Construir capas
    const layers: sharp.OverlayOptions[] = []

    // Imagen de fondo con opacidad
    if (coverBuffer) {
      const coverResized = await sharp(coverBuffer)
        .resize(width, height, { fit: 'cover' })
        .modulate({ brightness: 0.4 })
        .toBuffer()
      layers.push({ input: coverResized, top: 0, left: 0 })
    }

    // Gradiente inferior SVG
    const gradient = Buffer.from(`
      <svg width="${width}" height="${height}">
        <defs>
          <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#0a0a0a" stop-opacity="0"/>
            <stop offset="40%" stop-color="#0a0a0a" stop-opacity="0.9"/>
            <stop offset="100%" stop-color="#0a0a0a" stop-opacity="1"/>
          </linearGradient>
        </defs>
        <rect width="${width}" height="${height}" fill="url(#g)"/>
      </svg>
    `)
    layers.push({ input: gradient, top: 0, left: 0 })

    // Texto SVG
    const titleShort = title.length > 60 ? title.slice(0, 60) + '...' : title
    const excerptShort = excerpt ? (excerpt.length > 100 ? excerpt.slice(0, 100) + '...' : excerpt) : ''

    const textSvg = Buffer.from(`
      <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
        <style>
          .category { font: bold 32px Arial; fill: #a855f7; }
          .title { font: bold 56px Arial; fill: #ffffff; }
          .excerpt { font: 28px Arial; fill: #9ca3af; }
          .logo-nice { font: bold 36px Arial; fill: #FF2020; }
          .logo-x { font: bold 36px Arial; fill: #00CFFF; }
          .logo-play { font: bold 36px Arial; fill: #ffffff; }
          .logo-extreme { font: bold 20px Arial; fill: #FFB800; }
          .url { font: 24px Arial; fill: #3A4568; }
        </style>
        <text x="60" y="700" class="category">${category.toUpperCase()}</text>
        <foreignObject x="60" y="720" width="960" height="200">
          <div xmlns="http://www.w3.org/1999/xhtml" style="font: bold 56px Arial; color: white; word-wrap: break-word; line-height: 1.2;">
            ${titleShort}
          </div>
        </foreignObject>
        <text x="60" y="940" class="excerpt">${excerptShort}</text>
        <text x="60" y="1020" class="logo-nice">NICE</text>
        <text x="168" y="1020" class="logo-x">X</text>
        <text x="198" y="1020" class="logo-play">PLAY</text>
        <text x="320" y="1020" class="logo-extreme">EXTREME</text>
        <text x="860" y="1020" class="url">nicexplay.lat</text>
      </svg>
    `)
    layers.push({ input: textSvg, top: 0, left: 0 })

    // Componer imagen final
    const base = sharp({
      create: {
        width,
        height,
        channels: 4,
        background: { r: 10, g: 10, b: 10, alpha: 1 }
      }
    })

    const output = await base.composite(layers).png().toBuffer()

    return new NextResponse(output, {
      headers: {
        'Content-Type': 'image/png',
        'Content-Disposition': 'attachment; filename="nicexplay-instagram.png"'
      }
    })
  } catch (error) {
    console.error('Error generando imagen:', error)
    return NextResponse.json({ error: 'Error generando imagen' }, { status: 500 })
  }
}
