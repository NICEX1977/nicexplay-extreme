 import { NextResponse } from 'next/server'
import { crearPreferencia } from '../../../lib/mercadopago'

export async function POST(request: Request) {
  try {
    const { plan, email } = await request.json()
    
    if (!plan || !email) {
      return NextResponse.json({ error: 'Plan y email requeridos' }, { status: 400 })
    }
    
    const preference = await crearPreferencia(plan, email)
    
    return NextResponse.json({
      preferenceId: preference.id,
      initPoint: preference.init_point,
      sandboxInitPoint: preference.sandbox_init_point,
      success: true
    })
  } catch (error: any) {
    return NextResponse.json({ error: error.message, success: false }, { status: 500 })
  }
}
