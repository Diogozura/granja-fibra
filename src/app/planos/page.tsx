'use client';

import Planos from "@/components/Planos";
import { Container, Typography } from "@mui/material";
import { motion } from 'framer-motion';
import ComparacaoPlanos from "./ComparacaoPlanos";

export default function PlanosEmpresa() {
    return (
        <>
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
                        Escolha Seu Plano Ideal
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
                        Compare todos os recursos e benefícios dos nossos planos. Encontre a opção perfeita para suas necessidades.
                    </Typography>
                </motion.div>


                <Planos />

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
                        Comparação Detalhada dos Planos
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
                        Veja todas as diferenças entre nossos planos lado a lado
                    </Typography>
                </motion.div>
                <ComparacaoPlanos />
            </Container>
        </>
    )
}