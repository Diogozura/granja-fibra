'use client';

import { Box, Button, Grid, Typography, Paper, useTheme } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faShieldAlt, faClock } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import GradientTitle from './GradientTitle';

export default function Hero() {
  const theme = useTheme();

  return (
    <Box px={{ xs: 2, md: 1 }} py={{ xs: 6, md: 10 }} maxWidth="lg" mx="auto">
      <Grid container spacing={6} alignItems="center">
        {/* Conteúdo à esquerda */}
        <Grid size={{xs:12, md:7}}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <GradientTitle  variant="h2" component="h1" fontWeight={600} color="primary" gutterBottom>
              Internet Fibra Ótica Ultra Rápida
            </GradientTitle>
            <Typography variant="body1" color="text.secondary" paragraph>
              Conecte-se ao futuro com nossa internet fibra ótica de alta velocidade. Planos a partir de R$ 49,90/mês com instalação gratuita.
            </Typography>

            <Box mt={3} display="flex" gap={2} flexWrap="wrap">
              <Button variant="contained" size="large" sx={{ bgcolor: '#111', '&:hover': { bgcolor: '#000' } }}>
                Ver Planos →
              </Button>
              <Button
                variant="outlined"
                size="large"
                sx={{
                  borderColor: theme.palette.primary.main,
                  color: theme.palette.primary.main,
                  '&:hover': {
                    borderColor: theme.palette.primary.dark,
                    color: theme.palette.primary.dark,
                  },
                }}
              >
                Fale Conosco
              </Button>
            </Box>

            {/* Ícones */}
            <Box mt={6} display="flex" gap={6} flexWrap="wrap">
              {[
                { icon: faBolt, label: 'Mbps', value: '1000+' },
                { icon: faShieldAlt, label: 'Estabilidade', value: '99.9%' },
                { icon: faClock, label: 'Suporte', value: '24h' },
              ].map(({ icon, label, value }) => (
                <Box key={label} textAlign="center">
                  <FontAwesomeIcon icon={icon} size="2x" />
                  <Typography fontWeight={600} color="primary" mt={1}>
                    {value}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {label}
                  </Typography>
                </Box>
              ))}
            </Box>
          </motion.div>
        </Grid>

        {/* Card de Cobertura Total */}
        <Grid size={{xs:12, md:5}} >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Paper
              elevation={0}
              sx={{
                bgcolor: 'secondary.main',
                color: '#fff',
                borderRadius: 3,
                p: 4,
              }}
            >
              <Typography variant="h6" color="primary" fontWeight={600} gutterBottom>
                Cobertura Total
              </Typography>
              <Typography variant="body2" mb={3}>
                Nossa rede de fibra ótica cobre toda a região, levando internet de alta qualidade até sua casa ou empresa.
              </Typography>

              <Box display="flex" gap={2}>
                <Box
                  sx={{
                    flex: 1,
                    bgcolor: '#1a1a1a',
                    borderRadius: 2,
                    p: 2,
                    textAlign: 'center',
                  }}
                >
                  <Typography variant="h6" fontWeight={600}>
                    15+
                  </Typography>
                  <Typography variant="body2">Cidades Atendidas</Typography>
                </Box>
                <Box
                  sx={{
                    flex: 1,
                    bgcolor: '#1a1a1a',
                    borderRadius: 2,
                    p: 2,
                    textAlign: 'center',
                  }}
                >
                  <Typography variant="h6" fontWeight={600}>
                    50k+
                  </Typography>
                  <Typography variant="body2">Clientes Satisfeitos</Typography>
                </Box>
              </Box>
            </Paper>
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
}
