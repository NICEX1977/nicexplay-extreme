import { MercadoPagoConfig, Preference } from 'mercadopago'

const client = new MercadoPagoConfig({
  accessToken: process.env.MP_ACCESS_TOKEN!,
})

export const planes = {
  basic: {
    nombre: 'NICEXPLAY PLUS BÁSICO',
    precio: 9.90,
    descripcion: 'Sin anuncios + contenido exclusivo + insignias',
    moneda: 'PEN',
  },
  pro: {
    nombre: 'NICEXPLAY PLUS PRO',
    precio: 19.90,
    descripcion: 'Todo lo básico + podcasts exclusivos + acceso anticipado + soporte prioritario',
    moneda: 'PEN',
  },
}

export async function crearPreferencia(plan: 'basic' | 'pro', userEmail: string) {
  const preference = new Preference(client)
  
  const p = planes[plan]
  
  const response = await preference.create({
    body: {
      items: [
        {
          id: `nicexplay-plus-${plan}`,
          title: p.nombre,
          description: p.descripcion,
          quantity: 1,
          unit_price: p.precio,
          currency_id: p.moneda,
        }
      ],
      payer: {
        email: userEmail,
      },
      back_urls: {
        success: 'https://nicexplay.lat/premium/success',
        failure: 'https://nicexplay.lat/premium/failure',
        pending: 'https://nicexplay.lat/premium/pending',
      },
      auto_return: 'approved',
      statement_descriptor: 'NICEXPLAY PLUS',
    }
  })
  
  return response
}