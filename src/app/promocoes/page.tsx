'use client';

import { Container } from "@mui/material";
import { Metadata } from "next";
import dynamic from 'next/dynamic';

export const metadata: Metadata = {
  title: 'Nossas promoções - Graja fibra',
  description:
    'Provedor de Internet Granja fibra A Melhor Internet você encontra aqui Contamos com diversos planos, atendimento de qualidade e tecnologia de ponta para levar a melhor conexão até você!',
};

const Ofertas = dynamic(() => import('@/components/Oferta'));


export default function OfertasEmpresa() {
    return (
        <>
            <Container maxWidth="lg" sx={{ py: 10 }}>
                {/* Título principal */}

                <Ofertas />

        



            </Container>
        </>
    )
}