 import { NextResponse } from 'next/server'
import { ejecutarMotorTendencias, generarNoticiaTendencia } from '../../../lib/tendencias'
import { generarNoticia } from '../../../lib/groq'

export async function GET() {
  try {
    // Obtener tendencias
    const tendencias = await ejecutarMotorTendencias()
    
    // Generar noticia con IA sobre la tendencia top
    const resumen = await generarNoticiaTendencia()
    let noticiaIA = ''
    
    if (resumen) {
      noticiaIA = await generarNoticia(resumen)
    }

    return NextResponse.json({
      tendencias,
      noticiaIA,
      generadoEn: new Date().toISOString(),
      success: true
    })
  } catch (error: any) {
    return NextResponse.json({ error: error.message, success: false }, { status: 500 })
  }
}
