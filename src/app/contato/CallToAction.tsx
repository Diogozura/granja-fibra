'use client';
import { Box, Typography, Button, Stack, Paper } from '@mui/material';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function CallToAction() {
  const router = useRouter();

  const handleWhatsappClick = () => {
    const msg = encodeURIComponent("Olá! Gostaria de falar com um consultor sobre os planos da Graja Fibra.");
    window.open(`https://wa.me/558002950800?text=${msg}`, '_blank');
  };

  return (
    <Box component={motion.div} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <Paper elevation={1} sx={{ p: 4, borderRadius: 3, textAlign: 'center' }}>
        <Typography variant="h5" fontWeight="600" gutterBottom>
          Ainda com Dúvidas?
        </Typography>
        <Typography variant="body1" color="text.secondary" maxWidth={600} mx="auto" mb={3}>
          Nossa equipe está pronta para ajudar você a escolher o plano ideal. Entre em contato e receba uma consultoria personalizada gratuita.
        </Typography>

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
          <Button
            onClick={handleWhatsappClick}
            variant="contained"
            sx={{ bgcolor: '#f2f2f2', color: 'black', boxShadow: 1, '&:hover': { bgcolor: '#e0e0e0' } }}
          >
            Falar com consultor
          </Button>
          <Button
            onClick={() => router.push('/promocoes')}
            variant="contained"
            sx={{ bgcolor: '#f2f2f2', color: 'black', boxShadow: 1, '&:hover': { bgcolor: '#e0e0e0' } }}
          >
            Ver Ofertas Especiais
          </Button>
        </Stack>
      </Paper>
    </Box>
  );
}
