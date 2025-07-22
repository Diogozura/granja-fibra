// src/app/page.tsx
'use client';
import Beneficios from '@/components/Beneficios';
import Depoimentos from '@/components/Depoimentos';
import FaleConosco from '@/components/FaleConosco';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Planos from '@/components/Planos';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Beneficios />
      <Planos />
      <Depoimentos/>
      <FaleConosco />
      <Footer />
    </>
  );
}
