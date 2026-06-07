 import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  const body = await req.json()
  const { nombre, email, tipo, juego_principal, plataforma, seguidores, url_canal, descripcion } = body

  try {
    await resend.emails.send({
      from: 'NICEXPLAY <onboarding@resend.dev>',
      to: process.env.ADMIN_EMAIL!,
      subject: `🎮 Nueva solicitud de ${tipo}: ${nombre}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0a; color: #fff; padding: 30px; border-radius: 12px;">
          <h1 style="color: #a855f7;">🎮 NICEXPLAY — Nueva Solicitud</h1>
          <p style="color: #9ca3af;">Se recibió una nueva solicitud de creador</p>
          <hr style="border-color: #374151; margin: 20px 0;" />
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #9ca3af;">Nombre</td><td style="color: #fff; font-weight: bold;">${nombre}</td></tr>
            <tr><td style="padding: 8px 0; color: #9ca3af;">Email</td><td style="color: #fff;">${email}</td></tr>
            <tr><td style="padding: 8px 0; color: #9ca3af;">Tipo</td><td style="color: #a855f7; font-weight: bold; text-transform: uppercase;">${tipo}</td></tr>
            ${juego_principal ? `<tr><td style="padding: 8px 0; color: #9ca3af;">Juego</td><td style="color: #fff;">${juego_principal}</td></tr>` : ''}
            ${plataforma ? `<tr><td style="padding: 8px 0; color: #9ca3af;">Plataforma</td><td style="color: #fff;">${plataforma}</td></tr>` : ''}
            ${seguidores ? `<tr><td style="padding: 8px 0; color: #9ca3af;">Seguidores</td><td style="color: #fff;">${seguidores}</td></tr>` : ''}
            ${url_canal ? `<tr><td style="padding: 8px 0; color: #9ca3af;">Canal</td><td style="color: #a855f7;"><a href="${url_canal}" style="color: #a855f7;">${url_canal}</a></td></tr>` : ''}
          </table>
          ${descripcion ? `
          <hr style="border-color: #374151; margin: 20px 0;" />
          <p style="color: #9ca3af;">Descripción:</p>
          <p style="color: #fff; background: #1f2937; padding: 15px; border-radius: 8px;">${descripcion}</p>
          ` : ''}
          <hr style="border-color: #374151; margin: 20px 0;" />
          <a href="https://nicexplay.lat/admin" style="background: #7c3aed; color: #fff; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold;">Ver en Panel Admin</a>
        </div>
      `
    })

    return NextResponse.json({ ok: true })
  } catch (error) {
    return NextResponse.json({ error: 'Error enviando email' }, { status: 500 })
  }
}
