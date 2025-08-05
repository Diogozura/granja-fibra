'use client';

import { Container, Typography } from "@mui/material";

import dynamic from 'next/dynamic';


const Planos = dynamic(() => import('@/components/Planos'));




export default function PlanosEmpresa() {
    return (
        <> 
            <head>
                <title>Nossos planos - Graja fibra</title>
                <meta name="description" content="Planos de internet com ultra velocidade, estabilidade e suporte de qualidade. Cobertura em toda a região. Confira nossas ofertas!" />
            </head>
            <Container maxWidth="lg" sx={{ py: 10 }}>
                {/* Título principal */}




                <Planos />

                

           
            </Container>
        </>
    )
}