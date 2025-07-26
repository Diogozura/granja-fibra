'use client';

import FaleConosco from "@/components/FaleConosco";
import Ofertas from "@/components/Oferta";
import { Container, Typography } from "@mui/material";
import { motion } from 'framer-motion';
import Perguntas from "./perguntas";



export default function Faq() {
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
                        Perguntas Frequentes
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
                        Encontre respostas rápidas para as principais dúvidas sobre nossos serviços de internet fibra ótica.
                    </Typography>
                </motion.div>



            <Perguntas/>
             

                <FaleConosco />



            </Container>
        </>
    )
}