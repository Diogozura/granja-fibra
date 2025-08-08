'use client';

import { Container } from "@mui/material";

import dynamic from 'next/dynamic';


const Ofertas = dynamic(() => import('@/components/Oferta'));


export default function OfertasEmpresa() {
    return (
        <>
            <head>
                <title>Nossas promoções - Graja fibra</title>
                <meta name="description" content="Planos de internet com ultra velocidade, estabilidade e suporte de qualidade. Cobertura em toda a região. Confira nossas ofertas!" />
            </head>
            <Container maxWidth="lg" sx={{ py: 10 }}>
                {/* Título principal */}

                <Ofertas />





            </Container>
        </>
    )
}