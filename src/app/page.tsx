// src/app/page.tsx
'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

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
        <title>Graja fibra - provedor de internet</title>
        <meta name="description" content="Provedor de Internet Granja fibra A Melhor Internet você encontra aqui Contamos com diversos planos, atendimento de qualidade e tecnologia de ponta para levar a melhor conexão até você!" />
      </head>
      <Hero />
      <Ofertas />
      <Beneficios />
      <Planos />
      <Depoimentos />
      <Suspense fallback={<div>Carregando contato...</div>}>
        <FaleConosco />
      </Suspense>

    </>
  );
}
