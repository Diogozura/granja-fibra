// src/app/page.tsx
'use client';
import Beneficios from '@/components/Beneficios';
import Depoimentos from '@/components/Depoimentos';
import FaleConosco from '@/components/FaleConosco';
import Hero from '@/components/Hero';
import Ofertas from '@/components/Oferta';
import Planos from '@/components/Planos';



export default function Home() {
  return (
    <>
      <head>
        <title>Graja fibra - provedor de internet</title>
        <meta name="description" content="Provedor de Internet Granja fibra A Melhor Internet você encontra aqui Contamos com diversos planos, atendimento de qualidade e tecnologia de ponta para levar a melhor conexão até você!" />
      </head>
      <Hero />
      <Ofertas/>
      <Beneficios />
      <Planos />
      <Depoimentos/>
      <FaleConosco />
      
    </>
  );
}
