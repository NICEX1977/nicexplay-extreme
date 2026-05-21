 import { NextResponse } from 'next/server'
import { generarResumenGaming } from '../../../lib/groq'
import { textoAVoz } from '../../../lib/elevenlabs'

export async function GET() {
  try {
    // 1. Generar guión con Groq
    const guion = await generarResumenGaming()
    
    // 2. Convertir a voz con ElevenLabs
    const audioBuffer = await textoAVoz(guion)
    
    // 3. Devolver audio MP3
    return new NextResponse(audioBuffer, {
      headers: {
        'Content-Type': 'audio/mpeg',
        'Content-Length': audioBuffer.length.toString(),
      },
    })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
