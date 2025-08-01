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

                <Typography
                    component="h1"
                    variant="h2"
                    align="center"
                    fontWeight={600}
                    gutterBottom
                >
                    Escolha Seu Plano Ideal
                </Typography>



                <Typography
                    component="p"
                    variant="body1"
                    textAlign="center"
                    color="text.secondary"
                    sx={{ maxWidth: 800, mx: 'auto', mb: 8, mt: 2, lineHeight: 1.8 }}
                >
                    Compare todos os recursos e benefícios dos nossos planos. Encontre a opção perfeita para suas necessidades.
                </Typography>



                <Planos />

                

           
            </Container>
        </>
    )
}