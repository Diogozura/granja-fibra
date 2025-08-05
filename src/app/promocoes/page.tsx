'use client';

import { Container, Typography } from "@mui/material";
import dynamic from 'next/dynamic';
import head from "next/head";
import { Suspense } from "react";

const FaleConosco = dynamic(() => import('@/components/FaleConosco'), {
  ssr: false,
});
const Ofertas = dynamic(() => import('@/components/Oferta'));


export default function OfertasEmpresa() {
    return (
        <>
            <head>
                <title>Nossas promoções - Graja fibra</title>
                <meta name="description" content="Provedor de Internet Granja fibra A Melhor Internet você encontra aqui Contamos com diversos planos, atendimento de qualidade e tecnologia de ponta para levar a melhor conexão até você!" />
            </head>
            <Container maxWidth="lg" sx={{ py: 10 }}>
                {/* Título principal */}

                <Ofertas />

        



            </Container>
        </>
    )
}