 export default function PrivacidadPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#0B0F1A', color: '#F0F4FF', fontFamily: 'Inter, sans-serif' }}>
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200, height: '60px', background: 'rgba(11,15,26,0.95)', backdropFilter: 'blur(16px)', borderBottom: '0.5px solid rgba(255,32,32,0.2)', display: 'flex', alignItems: 'center', padding: '0 24px', gap: '16px' }}>
        <a href="/" style={{ fontFamily: 'Orbitron, sans-serif', fontWeight: 900, fontSize: '16px', textDecoration: 'none' }}>
          <span style={{ color: '#FF2020' }}>NICE</span><span style={{ color: '#00CFFF' }}>X</span><span style={{ color: '#F0F4FF' }}>PLAY</span>
        </a>
        <span style={{ color: '#3A4568' }}>›</span>
        <span style={{ color: '#7A8AB8', fontSize: '13px' }}>Política de Privacidad</span>
      </nav>

      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '80px 24px 40px' }}>
        <h1 style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '24px', fontWeight: 700, marginBottom: '8px' }}>Política de Privacidad</h1>
        <p style={{ color: '#7A8AB8', fontSize: '13px', marginBottom: '32px' }}>Última actualización: Mayo 2026</p>

        {[
          { title: '1. Información que recopilamos', content: 'NICEXPLAY EXTREME recopila información que usted nos proporciona directamente, como nombre, correo electrónico y datos de contacto cuando completa formularios en nuestro sitio. También recopilamos información de uso automáticamente, como dirección IP, tipo de navegador y páginas visitadas.' },
          { title: '2. Uso de la información', content: 'Utilizamos la información recopilada para operar y mejorar nuestros servicios, enviar comunicaciones relacionadas con el sitio, procesar solicitudes de creadores de contenido, y mejorar la experiencia del usuario en nicexplay.lat.' },
          { title: '3. Cookies y tecnologías similares', content: 'Utilizamos cookies para mejorar su experiencia en nuestro sitio. Google AdSense y otros servicios de publicidad pueden usar cookies para mostrar anuncios relevantes. Puede controlar el uso de cookies a través de la configuración de su navegador.' },
          { title: '4. Google AdSense y publicidad', content: 'NICEXPLAY EXTREME utiliza Google AdSense para mostrar anuncios. Google puede usar cookies para mostrar anuncios basados en sus visitas anteriores a nuestro sitio y otros sitios web. Puede optar por no recibir publicidad personalizada visitando Configuración de anuncios de Google.' },
          { title: '5. Compartir información', content: 'No vendemos, intercambiamos ni transferimos su información personal a terceros sin su consentimiento, excepto cuando sea necesario para operar nuestro sitio o cumplir con la ley.' },
          { title: '6. Seguridad', content: 'Implementamos medidas de seguridad técnicas y organizativas para proteger su información personal contra acceso no autorizado, alteración, divulgación o destrucción.' },
          { title: '7. Sus derechos', content: 'Usted tiene derecho a acceder, corregir o eliminar su información personal. Para ejercer estos derechos, contáctenos en nicexplayofficial@gmail.com.' },
          { title: '8. Cambios a esta política', content: 'Podemos actualizar esta política de privacidad periódicamente. Le notificaremos sobre cambios significativos publicando la nueva política en esta página.' },
          { title: '9. Contacto', content: 'Si tiene preguntas sobre esta política de privacidad, contáctenos en nicexplayofficial@gmail.com o visite nicexplay.lat.' },
        ].map(s => (
          <div key={s.title} style={{ marginBottom: '28px' }}>
            <h2 style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '13px', fontWeight: 700, color: '#FF2020', letterSpacing: '1px', marginBottom: '10px' }}>{s.title}</h2>
            <p style={{ fontSize: '14px', lineHeight: 1.8, color: '#C8D0E0' }}>{s.content}</p>
          </div>
        ))}

        <div style={{ marginTop: '40px', paddingTop: '24px', borderTop: '0.5px solid rgba(255,255,255,0.06)' }}>
          <a href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontFamily: 'Orbitron, sans-serif', fontSize: '10px', letterSpacing: '2px', color: '#00CFFF', textDecoration: 'none', padding: '10px 20px', border: '0.5px solid #00CFFF', borderRadius: '4px' }}>
            ← VOLVER A NICEXPLAY
          </a>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;700;900&family=Inter:wght@300;400;500;600&display=swap');
      `}</style>
    </div>
  )
}
