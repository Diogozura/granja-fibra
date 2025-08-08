// src/app/page.tsx
'use client';
import dynamic from 'next/dynamic';


const Hero = dynamic(() => import('@/components/Hero'));
const Ofertas = dynamic(() => import('@/components/Oferta'));
const Beneficios = dynamic(() => import('@/components/Beneficios'));
const Planos = dynamic(() => import('@/components/Planos'));
const Depoimentos = dynamic(() => import('@/components/Depoimentos'));
const FaleConosco = dynamic(() => import('@/components/FaleConosco'), {
  ssr: false,
});


export default function Home() {
  return (
    <>
      <head>
        <title>Graja Fibra - Provedor de Internet</title>
        <meta
          name="description"
          content="Provedor de Internet Granja Fibra. A Melhor Internet você encontra aqui. Planos, atendimento de qualidade e tecnologia de ponta."
        />
      </head>
      <Hero />
      <Ofertas />
      <Beneficios />
      <Planos />
      <Depoimentos />

      <FaleConosco />


    </>
  );
}
