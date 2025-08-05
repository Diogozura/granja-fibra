'use client';

import { Container, Typography } from "@mui/material";


import dynamic from 'next/dynamic';
import { Suspense } from "react";


const FaleConosco = dynamic(() => import('@/components/FaleConosco'), {
  ssr: false,
});

export default function Contato() {
    return (
        <>
            <head>
                <title>Contato - Graja fibra</title>
                <meta name="description" content="Contato - graja fibra , tire seus dúvidas em nosso canal de atendimento , pelo telefone ou whatsApp" />
            </head>
            <Container maxWidth="lg" sx={{ py: 10 }}>


            
                <Suspense fallback={<div>Carregando contato...</div>}>
                    <FaleConosco />
                </Suspense>
                {/* <CallToAction /> */}
            </Container>
        </>
    )
}