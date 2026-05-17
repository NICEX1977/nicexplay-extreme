 import { NextResponse } from 'next/server'
import { generarNoticia, generarResumenGaming } from '../../../lib/groq'

export async function POST(request: Request) {
  try {
    const { tipo, tema } = await request.json()
    
    let contenido = ''
    
    if (tipo === 'noticia') {
      contenido = await generarNoticia(tema || 'gaming LatAm')
    } else if (tipo === 'podcast') {
      contenido = await generarResumenGaming()
    }
    
    return NextResponse.json({ contenido, success: true })
  } catch (error) {
    return NextResponse.json({ error: 'Error generando contenido', success: false }, { status: 500 })
  }
}

export async function GET() {
  try {
    const apiKey = process.env.GROQ_API_KEY
    if (!apiKey) {
      return NextResponse.json({ error: 'No API key', success: false }, { status: 500 })
    }
    const contenido = await generarResumenGaming()
    return NextResponse.json({ contenido, success: true })
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Error', success: false }, { status: 500 })
  }
}
