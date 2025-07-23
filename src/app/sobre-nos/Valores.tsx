'use client';

import { Box, Container, Grid, Typography, Stack } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBullseye,
  faHandshake,
  faAward,
} from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const valores = [
  {
    icone: faBullseye,
    titulo: 'Excelência',
    texto:
      'Buscamos sempre a melhor qualidade em nossos serviços, desde a instalação até o suporte ao cliente.',
  },
  {
    icone: faHandshake,
    titulo: 'Compromisso',
    texto:
      'Nosso compromisso é com a satisfação do cliente, oferecendo soluções personalizadas para cada necessidade.',
  },
  {
    icone: faAward,
    titulo: 'Inovação',
    texto:
      'Investimos constantemente em tecnologia de ponta para oferecer a melhor experiência de conectividade.',
  },
];

export default function Valores() {
  return (
    <Box py={10} sx={{ backgroundColor: '#fff' }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h4"
            align="center"
            className="text-gradient-primary"
            fontWeight={600}
            gutterBottom
          >
            Nossos Valores
          </Typography>
          <Typography
            align="center"
            color="text.secondary"
            mb={6}
          >
            Os princípios que guiam nosso trabalho todos os dias
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {valores.map((item, i) => (
            <Grid size={{xs:12, md:4}} key={i}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Stack spacing={2} alignItems="center" textAlign="center">
                  <Box
                    sx={{
                      bgcolor: '#111',
                      borderRadius: '50%',
                      width: 72,
                      height: 72,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <FontAwesomeIcon
                      icon={item.icone}
                      style={{ color: '#fff', fontSize: 32 }}
                    />
                  </Box>
                  <Typography fontWeight={600} color="primary">
                    {item.titulo}
                  </Typography>
                  <Typography color="text.secondary" fontSize={14}>
                    {item.texto}
                  </Typography>
                </Stack>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
