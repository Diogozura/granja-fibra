'use client';

import { Container, Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';
import Valores from './Valores';


export default function Sobre() {
    return (

        <>
            <head>
                <title>Sobre nós - graja fibra </title>
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
                        className="text-gradient-primary"
                        fontWeight={600}
                        gutterBottom
                    >
                        Sobre a GrajaFibra
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
                        A Graja Fibra é um provedor de internet que atua desde 2008, oferecendo
                        conexão de alta performance com estrutura própria em fibra óptica. Atendemos
                        mais de 60 bairros e 22 provedores em 5 cidades, com rede conectada diretamente
                        aos principais datacenters e geradores de conteúdo do mundo. Nosso compromisso
                        é entregar qualidade, estabilidade e um atendimento que faz a diferença.
                    </Typography>
                </motion.div>

                {/* Seção Nossa História */}
                <Box mt={12}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <Typography
                            component="h2"
                            variant="h3"
                            align="center"
                            className="text-gradient-primary"
                            fontWeight={600}
                            gutterBottom
                        >
                            Nossa História
                        </Typography>
                    </motion.div>

                    {[
                        `A Graja Fibra iniciou suas atividades em 2008, com o propósito de levar conexão de qualidade para a região do Grajaú e bairros vizinhos. Ao longo dos anos, investimos em infraestrutura própria, migrando da tecnologia via rádio para fibra óptica, sempre buscando excelência em nossos serviços.`,
                        `Fomos pioneiros na região, com a implantação da nossa primeira rota de fibra em 2014, conectando diretamente aos principais datacenters de São Paulo. Atualmente, operamos com quatro rotas ativas, três datacenters e atendemos mais de 60 bairros, além de fornecer conectividade para 22 provedores em cinco cidades.`,
                        `Nossa rede é estruturada com conexão direta às maiores operadoras e geradoras de conteúdo do mundo, como Level3, Cogent, Google, Netflix, Facebook, Amazon, Microsoft, Globo, Akamai, Twitch, Cloudflare, entre outras, garantindo alta performance, estabilidade e velocidade.`,
                        `A Graja Fibra tem como compromisso oferecer um serviço de internet com excelência, priorizando a qualidade, o atendimento e a experiência dos nossos clientes.`,
                    ].map((paragrafo, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 * index, duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <Typography
                                component="p"
                                variant="body1"
                                textAlign="justify"
                                color="text.secondary"
                                sx={{ mt: 3, lineHeight: 1.8 }}
                            >
                                {paragrafo}
                            </Typography>
                        </motion.div>
                    ))}
                </Box>

                {/* Seção de Valores */}
                <Box mt={12}>
                    <Valores />
                </Box>
            </Container>
        </>

    );
}
