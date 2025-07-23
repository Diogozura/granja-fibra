'use client';

import { Box, Container, Grid, Typography, Paper } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBolt,
  faShieldAlt,
  faClock,
  faHeadset,
  faWifi,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const beneficios = [
  {
    titulo: 'Velocidade Ultra Rápida',
    descricao: 'Até 1000 Mbps de velocidade real, não apenas teórica. Perfeito para streaming 4K, jogos online e trabalho remoto.',
    icon: faBolt,
  },
  {
    titulo: '99.9% de Estabilidade',
    descricao: 'Nossa rede de fibra ótica garante conexão estável e confiável, sem quedas ou instabilidade.',
    icon: faShieldAlt,
  },
  {
    titulo: 'Instalação Rápida',
    descricao: 'Instalação gratuita em até 48 horas. Nossa equipe técnica especializada cuida de tudo para você.',
    icon: faClock,
  },
  {
    titulo: 'Suporte 24/7',
    descricao: 'Atendimento especializado disponível 24 horas por dia, 7 dias da semana para resolver qualquer problema.',
    icon: faHeadset,
  },
  {
    titulo: 'Wi-Fi 6 Incluso',
    descricao: 'Roteador Wi-Fi 6 de última geração incluso no plano, garantindo cobertura total da sua casa.',
    icon: faWifi,
  },
  {
    titulo: 'Para Toda Família',
    descricao: 'Internet sem limite de dispositivos conectados. Toda a família pode usar simultaneamente sem perda de qualidade.',
    icon: faUsers,
  },
];

export default function Beneficios() {
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
            gutterBottom
          >
            Por que escolher a GrajaFibra?
          </Typography>
          <Typography variant="body1" align="center" color="text.secondary" mb={6}>
            Oferecemos a melhor experiência em internet fibra ótica da região, com tecnologia
            de ponta e atendimento diferenciado.
          </Typography>
        </motion.div>

        <Grid container spacing={3}>
          {beneficios.map((item, index) => (
            <Grid size={{xs:12, sm:6, md:4}}  key={index}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    bgcolor: '#F9FAFB',
                    p: 3,
                    height: '100%',
                    transition: 'all 0.3s ease',
                    border: '1px solid #E0E0E0',
                    '&:hover': {
                      transform: 'scale(1.03)',
                      boxShadow: 4,
                    },
                  }}
                >
                  <Box
                    width={42}
                    height={42}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    borderRadius={2}
                    bgcolor="#000"
                    mb={2}
                  >
                    <FontAwesomeIcon icon={item.icon} color="white" />
                  </Box>
                  <Typography fontWeight={600} color="primary" gutterBottom>
                    {item.titulo}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.descricao}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
