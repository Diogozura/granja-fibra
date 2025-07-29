'use client';

import { Container, Typography } from "@mui/material";
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import head from "next/head";

const Planos = dynamic(() => import('@/components/Planos'));
const ComparacaoPlanos = dynamic(() => import('./ComparacaoPlanos'));


export default function PlanosEmpresa() {
    return (
        <>
            <head>
                <title>Nossos planos - Graja fibra</title>
                <meta name="description" content="Provedor de Internet Granja fibra A Melhor Internet você encontra aqui Contamos com diversos planos, atendimento de qualidade e tecnologia de ponta para levar a melhor conexão até você!" />
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