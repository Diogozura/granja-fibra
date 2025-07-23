'use client';
import FaleConosco from "@/components/FaleConosco";
import { Container, Typography } from "@mui/material";
import { motion } from 'framer-motion';
import ContatoCards from "./ContatoCards";
import Head from "next/head";
import CanaisAtendimento from "./CanaisAtendimento";
import CallToAction from "./CallToAction";

export default function Contato() {
    return (
        <>
        <Head>
            <title>Contato - Graja fibra</title>
           <meta name="description" content="Contato - graja fibra , tire seus dúvidas em nosso canal de atendimento , pelo telefone ou whatsApp" />
        </Head>
            <Container maxWidth="lg" sx={{ py: 10 }}>

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
                        Entre em Contato
                    </Typography>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <Typography
                        component="p"
                        variant="body1"
                        textAlign="center"
                        color="text.secondary"
                        sx={{ maxWidth: 800, mx: 'auto', mb: 8, mt: 2, lineHeight: 1.8 }}
                    >
                        Estamos aqui para ajudar você. Entre em contato conosco através dos canais abaixo ou preencha o formulário para solicitar sua instalação.                    </Typography>
                </motion.div>
                <ContatoCards />
                <CanaisAtendimento/>
                <FaleConosco />
                <CallToAction/>
            </Container>
        </>
    )
}