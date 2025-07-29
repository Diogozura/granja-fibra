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
    titulo: 'Internet ultraveloz',
    descricao: 'Contamos com uma internet fibra óptica com ultravelocidade para levar a melhor experiência para nossos clientes.',
    icon: faBolt,
  },
  {
    titulo: 'Wi-fi Premium',
    descricao: 'Nossos planos contam com wi-fi premium a fim de levar uma conexão em longo alcance sem perca de qualidade para você!',
    icon: faWifi,
  },
  {
    titulo: 'Suporte todos os dias',
    descricao: 'A Graja Fibra possuí uma equipe de suporte especializada para te ajudar sempre que necessário.',
    icon: faHeadset,
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
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
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
