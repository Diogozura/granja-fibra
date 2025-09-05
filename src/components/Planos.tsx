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
import { useEffect, useState } from 'react';
import Link from 'next/link';

interface Plano {
  promocao: string;
  velocidade: string;
  descricao: string;
  preco: string;
  precoOriginal: string;
  destaque: boolean;
  beneficios: string[];

}
export default function Planos() {

  const [planos, setPlanos] = useState<Plano[]>([]);

  useEffect(() => {
    fetch('https://qrcode.grajafibra.net.br/sistema_avaliacoes/dados.php')
      .then((res) => res.json())
      .then((data) => setPlanos(data.planos));
  }, []);
  return (
    <Box py={10} sx={{ background: '#F5F6FA' }} id='planos'>
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
                elevation={plano?.destaque ? 0 : 1}
                sx={{
                  position: 'relative',
                  p: 4,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between', // garante que botão vá pro final
                  borderRadius: 3,
                  bgcolor: 'white',
                  border: '1px solid #ddd',
                  backgroundOrigin: 'border-box',
                  backgroundClip: 'padding-box, border-box',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.03)',
                  },
                }}
              >
                {plano?.destaque && (
                  <Box
                    sx={{
                      position: 'absolute',
                      top: -14,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      bgcolor: '#000000',
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

                <Typography variant="h5" fontWeight={600} mb={1}>
                  {plano.promocao}
                </Typography>



                <Stack spacing={1.5} mt={3} mb={4}>
                  {plano.beneficios.map((beneficio, idx) => (
                    <Box key={idx} display="flex" alignItems="center" gap={1}>
                      <FontAwesomeIcon icon={faCheck} style={{ color: 'green', fontSize: 14 }} />
                      <Typography variant="body2">{beneficio}</Typography>
                    </Box>
                  ))}
                </Stack>
                <Typography variant="h6" mt={1} fontWeight={600}>
                  {plano.preco}
                </Typography>
                <Link href={`/assinar`} passHref>
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

                    Assinar já
                  </Button>
                </Link>
              </Paper>
            );

            return (
              <Grid size={{ xs: 12, md: 4 }} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {card}
                </motion.div>
              </Grid>
            );
          })}
        </Grid>

        {/* <Box mt={6} textAlign="center">
          <Typography variant="body2" mb={0.5}>
            🎉 <strong>Oferta especial:</strong> 3 meses de desconto para novos clientes
          </Typography>
          <Typography variant="caption" color="text.secondary">
            *Valores promocionais válidos por tempo limitado. Consulte condições.
          </Typography>
        </Box> */}
      </Container>
    </Box>
  );
}
