import Groq from 'groq-sdk'

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
})

export async function generarNoticia(tema: string): Promise<string> {
  const completion = await groq.chat.completions.create({
    messages: [
      {
        role: 'system',
        content: `Eres un periodista de gaming latinoamericano. Escribes noticias cortas, dinámicas y emocionantes sobre esports y videojuegos. Tu estilo es directo, apasionado y usa jerga gaming latina. Máximo 150 palabras por noticia.`
      },
      {
        role: 'user',
        content: `Escribe una noticia breve sobre: ${tema}. Incluye datos reales si los conoces. Formato: título en mayúsculas, luego el contenido.`
      }
    ],
    model: 'llama-3.1-8b-instant',
    temperature: 0.7,
    max_tokens: 200,
  })

  return completion.choices[0]?.message?.content || ''
}

export async function generarResumenGaming(): Promise<string> {
  const completion = await groq.chat.completions.create({
    messages: [
      {
        role: 'system',
        content: `Eres el locutor del podcast "NEXUS" de NICEXPLAY EXTREME. Hablas en español latino peruano, eres energético, usas jerga gaming y conectas con la audiencia de LatAm. Máximo 200 palabras.`
      },
      {
        role: 'user',
        content: `Crea el guión de apertura del podcast de hoy resumiendo las noticias más importantes del gaming LatAm: DreamLeague S29 con paiN Gaming, GTA VI en noviembre, IEM Cologne de CS2, y Free Fire World Series LatAm.`
      }
    ],
    model: 'llama-3.1-8b-instant',
    temperature: 0.8,
    max_tokens: 300,
  })

  return completion.choices[0]?.message?.content || ''
}