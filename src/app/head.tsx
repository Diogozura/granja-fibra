export default function Head() {

  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Graja Fibra",
        "url": "https://www.grajafibra.com.br",
        "logo": "https://www.grajafibra.com.br/logo.png",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Avenida Ernesto João Marcelino,2241",
          addressLocality: "Embu Guaçu",
          addressRegion: "SP",
          postalCode: "06905-040",
          addressCountry: "BR"
        },
        telephone: "08002950800",
        "description": "Provedor de Internet Granja fibra A Melhor Internet você encontra aqui Contamos com diversos planos, atendimento de qualidade e tecnologia de ponta para levar a melhor conexão até você!",
        "sameAs": ["https://instagram.com/grajafibra"]
      })
    }}
  ></script>
  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta name="robots" content="index, follow" />
      <meta
        name="keywords"
        content="internet fibra, provedor de internet, Granja Fibra, planos de internet, internet residencial"
      />

      {/* Open Graph / Facebook */}
      <meta property="og:title" content="Graja Fibra" />
      <meta property="og:description" content="Provedor de Internet Granja fibra A Melhor Internet você encontra aqui Contamos com diversos planos, atendimento de qualidade e tecnologia de ponta para levar a melhor conexão até você!" />
      <meta property="og:image" content="https://www.grajafibra.com.br/og-image.png" />
      <meta property="og:url" content="https://www.grajafibra.com.br" />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Graja Fibra" />
      <meta name="twitter:description" content="Provedor de Internet Granja fibra A Melhor Internet você encontra aqui Contamos com diversos planos, atendimento de qualidade e tecnologia de ponta para levar a melhor conexão até você!" />
      <meta name="twitter:image" content="https://www.grajafibra.com.br/og-image.png" />

      <link rel="icon" href="/favicon.ico" />


    </>
  );
}
