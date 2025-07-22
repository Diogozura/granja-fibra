'use client';

import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const planos = [
  {
    nome: 'Essencial',
    velocidade: '200 Mbps',
    preco: 'R$ 49,90/mês',
    precoOriginal: 'R$ 59,90',
    beneficios: [
      '200 Mbps de velocidade',
      'Wi-Fi grátis',
      'Instalação gratuita',
      'Suporte técnico',
      'Sem fidelidade',
    ],
    destaque: false,
  },
  {
    nome: 'Essencial',
    velocidade: '500 Mbps',
    preco: 'R$ 79,90/mês',
    precoOriginal: 'R$ 99,90',
    beneficios: [
      '500 Mbps de velocidade',
      'Wi-Fi 6 grátis',
      'Instalação gratuita',
      'Suporte 24h',
      'Netflix incluso',
      'Suporte técnico',
      'Sem fidelidade',
    ],
    destaque: true,
  },
  {
    nome: 'Essencial',
    velocidade: '200 Mbps',
    preco: 'R$ 49,90/mês',
    precoOriginal: 'R$ 50,90',
    beneficios: [
      '200 Mbps de velocidade',
      'Wi-Fi grátis',
      'Instalação gratuita',
      'Suporte técnico',
      'Sem fidelidade',
    ],
    destaque: false,
  },
];

export default function Planos() {
  return (
    <Box py={10} sx={{ background: '#F5F6FA' }}>
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
            Escolha seu plano ideal
          </Typography>
          <Typography align="center" color="text.secondary" mb={6}>
            Planos com desconto especial para novos clientes. Instalação gratuita e sem taxa de adesão.
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {planos.map((plano, index) => {
            const card = (
              <Paper
                elevation={plano.destaque ? 0 : 1}
                sx={{
                  position: 'relative',
                  p: 4,
                  height: '100%',
                  borderRadius: 3,
                  bgcolor: 'white',
                  border: plano.destaque ? '2px solid transparent' : '1px solid #ddd',
                  backgroundImage: plano.destaque
                    ? 'linear-gradient(white, white), linear-gradient(135deg, #3756FB 45%, #771FE6 100%)'
                    : undefined,
                  backgroundOrigin: 'border-box',
                  backgroundClip: plano.destaque ? 'padding-box, border-box' : undefined,
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.03)',
                  },
                }}
              >
                {plano.destaque && (
                  <Box
                    sx={{
                      position: 'absolute',
                      top: -14,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      bgcolor: '#3756FB',
                      color: 'white',
                      fontSize: 12,
                      px: 2,
                      py: 0.5,
                      borderRadius: 999,
                      fontWeight: 600,
                    }}
                  >
                    🌟 Mais Popular
                  </Box>
                )}

                <Typography fontWeight={600} mb={1}>
                  {plano.nome}
                </Typography>
                <Typography variant="h5" fontWeight={600}>
                  {plano.velocidade} <Typography variant="caption">Mbps</Typography>
                </Typography>

                <Typography variant="h6" mt={1} fontWeight={600}>
                  {plano.preco}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ textDecoration: 'line-through' }}
                >
                  De {plano.precoOriginal}
                </Typography>

                <Stack spacing={1.5} mt={3} mb={4}>
                  {plano.beneficios.map((beneficio, idx) => (
                    <Box key={idx} display="flex" alignItems="center" gap={1}>
                      <FontAwesomeIcon icon={faCheck} style={{ color: 'green', fontSize: 14 }} />
                      <Typography variant="body2">{beneficio}</Typography>
                    </Box>
                  ))}
                </Stack>

                <Button
                  fullWidth
                  variant="contained"
                  sx={{
                    bgcolor: '#111',
                    color: 'white',
                    textTransform: 'none',
                    '&:hover': {
                      bgcolor: '#000',
                    },
                  }}
                >
                  Assinar Agora
                </Button>
              </Paper>
            );

            return (
              <Grid size={{xs:12, md:4}} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  viewport={{ once: true }}
                >
                  {card}
                </motion.div>
              </Grid>
            );
          })}
        </Grid>

        <Box mt={6} textAlign="center">
          <Typography variant="body2" mb={0.5}>
            🎉 <strong>Oferta especial:</strong> 3 meses de desconto para novos clientes
          </Typography>
          <Typography variant="caption" color="text.secondary">
            *Valores promocionais válidos por tempo limitado. Consulte condições.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
