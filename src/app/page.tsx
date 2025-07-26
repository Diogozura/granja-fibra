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
      
      <Hero />
      <Ofertas/>
      <Beneficios />
      <Planos />
      <Depoimentos/>
      <FaleConosco />
      
    </>
  );
}
