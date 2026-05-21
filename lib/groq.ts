import Groq from 'groq-sdk'

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
})

export async function generarNoticia(tema: string): Promise<string> {
  const completion = await groq.chat.completions.create({
    messages: [
      {
        role: 'system',
        content: 'Eres un periodista de gaming latinoamericano. Escribes noticias cortas sobre esports. Maximo 150 palabras.'
      },
      {
        role: 'user',
        content: `Escribe una noticia breve sobre: ${tema}.`
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
        content: 'Eres el locutor del podcast NEXUS de NICEXPLAY EXTREME. Hablas en español latino peruano, eres energetico y usas jerga gaming. Habla directo sin indicaciones de musica ni efectos de sonido ni acotaciones entre asteriscos. Solo el texto que debes decir en voz alta. Maximo 200 palabras.'
      },
      {
        role: 'user',
        content: 'Crea el guion de apertura del podcast de hoy resumiendo las noticias mas importantes del gaming LatAm: DreamLeague S29 con paiN Gaming, GTA VI en noviembre, IEM Cologne de CS2, y Free Fire World Series LatAm.'
      }
    ],
    model: 'llama-3.1-8b-instant',
    temperature: 0.8,
    max_tokens: 300,
  })
  return completion.choices[0]?.message?.content || ''
}