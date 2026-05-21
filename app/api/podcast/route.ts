import { NextResponse } from 'next/server'
import { generarResumenGaming } from '../../../lib/groq'
import { textoAVoz } from '../../../lib/elevenlabs'

export async function GET() {
  try {
    const guion = await generarResumenGaming()
    const audioBuffer = await textoAVoz(guion)
    
    return new NextResponse(new Uint8Array(audioBuffer), {
      headers: {
        'Content-Type': 'audio/mpeg',
        'Content-Length': audioBuffer.length.toString(),
      },
    })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}