// src/app/json-ld.tsx
export default function JsonLd() {
  const json = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Graja Fibra',
    url: 'https://www.grajafibra.com.br',
    logo: 'https://www.grajafibra.com.br/logo.png',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Avenida Ernesto João Marcelino, 2241',
      addressLocality: 'Embu Guaçu',
      addressRegion: 'SP',
      postalCode: '06905-040',
      addressCountry: 'BR',
    },
    telephone: '08002950800',
    description:
      'Provedor de Internet Granja Fibra. Planos, atendimento de qualidade e tecnologia de ponta.',
    sameAs: ['https://instagram.com/grajafibra'],
  }

  return (
    <script
      type="application/ld+json"
      // ok em server component
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  )
}
