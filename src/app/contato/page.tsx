'use client';

import { Container, Typography } from "@mui/material";
import head from "next/head";

import dynamic from 'next/dynamic';
import { Suspense } from "react";


const FaleConosco = dynamic(() => import('@/components/FaleConosco'), {
  ssr: false,
});
const ContatoCards = dynamic(() => import('./ContatoCards'));
const CanaisAtendimento = dynamic(() => import('./CanaisAtendimento'));
const CallToAction = dynamic(() => import('./CallToAction'));

export default function Contato() {
    return (
        <>
            <head>
                <title>Contato - Graja fibra</title>
                <meta name="description" content="Contato - graja fibra , tire seus dúvidas em nosso canal de atendimento , pelo telefone ou whatsApp" />
            </head>
            <Container maxWidth="lg" sx={{ py: 10 }}>


                <Typography
                    component="h1"
                    variant="h2"
                    align="center"
                    fontWeight={600}
                    gutterBottom
                >
                    Entre em Contato
                </Typography>



                <Typography
                    component="p"
                    variant="body1"
                    textAlign="center"
                    color="text.secondary"
                    sx={{ maxWidth: 800, mx: 'auto', mb: 8, mt: 2, lineHeight: 1.8 }}
                >
                    Estamos aqui para ajudar você. Entre em contato conosco através dos canais abaixo ou preencha o formulário para solicitar sua instalação.                    </Typography>

                <ContatoCards />
                <CanaisAtendimento />
                <Suspense fallback={<div>Carregando contato...</div>}>
                    <FaleConosco />
                </Suspense>
                <CallToAction />
            </Container>
        </>
    )
}