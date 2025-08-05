'use client';

import { Container } from "@mui/material";
import dynamic from 'next/dynamic';


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