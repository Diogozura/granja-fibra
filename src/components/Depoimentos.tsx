'use client';

import { Box, Container, Grid, Typography, Paper } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import Link from 'next/link';

const depoimentos = [
  {
    nome: 'Vivaldo Fernandes',
   
    mensagem:
      'Internet muito boa,suporte também ligou pros caras os caras estão no seu portão no mesmo dia,super recomendo Internet de qualidade...',
  },
  {
    nome: 'Gustavo Souza Lomba',
    
    mensagem:
      'Tive ótimas experiências com esta internet, não me arrependo e o serviço entrega o que promete.Sempre recomendo aos amigos',
  },
  {
    nome: 'Ana Clara Inocencio Ferreira',
    
    mensagem:
      'Serviço de qualidade ótima, minha experiência está sendo uma das melhores até hoje, recomendo!',
  },
];

export default function Depoimentos() {
  return (
    <Box py={10}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h4"
            align="center"
            fontWeight={600}
            className="text-gradient-primary"
            gutterBottom
          >
            O que nossos clientes dizem
          </Typography>
          <Typography align="center" color="text.secondary" mb={6}>
            Mais de 50.000 clientes satisfeitos em toda a região
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {depoimentos.map((d, index) => (
            <Grid size={{xs:12, md:4}}  key={index}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    bgcolor: '#F9FAFB',
                    p: 4,
                    borderRadius: 3,
                    height: '100%',
                    transition: 'transform 0.3s ease',
                    '&:hover': { transform: 'scale(1.03)', boxShadow: 4 },
                  }}
                >
                  <Box display="flex" gap={0.5} mb={2}>
                    {[...Array(5)].map((_, i) => (
                      <FontAwesomeIcon key={i} icon={faStar} color="#FACC15" />
                    ))}
                  </Box>
                  <Typography
                    variant="body2"
                    color="text.primary"
                    fontStyle="italic"
                    mb={3}
                  >
                    “{d.mensagem}”
                  </Typography>
                  <Typography fontWeight={600}>{d.nome}</Typography>
                  
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Avaliação geral */}
        <Box mt={6} display="flex" justifyContent="center">
          <Box
            px={3}
            py={1.5}
            bgcolor="#fff"
            borderRadius={2}
            boxShadow={1}
            display="flex"
            alignItems="center"
            gap={1.5}
          >
            <FontAwesomeIcon icon={faStar} color="#FACC15" />
            <Typography variant="body2" color="primary" fontWeight={600}>
              4.9/5 estrelas
            </Typography>
            <Typography variant="body2" color="text.secondary">
                <Link href={'https://share.google/KuXLKXV9vgsMzhzL3'}>Mais  avaliações</Link>
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
