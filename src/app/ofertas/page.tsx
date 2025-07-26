'use client';

import FaleConosco from "@/components/FaleConosco";
import Ofertas from "@/components/Oferta";
import Planos from "@/components/Planos";
import { Container, Typography } from "@mui/material";
import { motion } from 'framer-motion';




export default function OfertasEmpresa() {
    return (
        <>
            <head>
                <title>Nossas ofertas - Graja fibra</title>
                <meta name="description" content="Provedor de Internet Granja fibra A Melhor Internet você encontra aqui Contamos com diversos planos, atendimento de qualidade e tecnologia de ponta para levar a melhor conexão até você!" />
            </head>
            <Container maxWidth="lg" sx={{ py: 10 }}>
                {/* Título principal */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <Typography
                        component="h1"
                        variant="h2"
                        align="center"
                        fontWeight={600}
                        gutterBottom
                    >
                        Escolha Oferta
                    </Typography>
                </motion.div>




                <Ofertas />

                <FaleConosco />



            </Container>
        </>
    )
}