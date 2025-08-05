'use client';

import {
  Box,
  Container,
  Grid,
  Paper,
  Stack,
  Link,
  Typography,
} from '@mui/material';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
  faClock,
  faRocket,
  faCheck,
} from '@fortawesome/free-solid-svg-icons';

import empresa from '@/data/empresa.json'; // <-- importando os dados

import dynamic from 'next/dynamic';

const FormContato = dynamic(() => import('@/components/FormContato'));

export default function FaleConosco() {
  const enderecoCompleto = `${empresa.endereco.logradouro}, ${empresa.endereco.numero} – ${empresa.endereco.complemento}
${empresa.endereco.bairro}, ${empresa.endereco.cidade}`;

  return (
    <Box py={10} sx={{ background: '#F5F6FA' }} id='fale-conosco'>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h4"
            color='primary'
            align="center"
            fontWeight={600}
            gutterBottom
          >
            Fale conosco
          </Typography>
          <Typography align="center" color="text.secondary" mb={6}>
            Entre em contato e garanta já sua internet fibra ótica
          </Typography>
        </motion.div>

        <Grid container spacing={6}>
          {/* Informações */}
          <Grid size={{ xs: 12, sm: 6 }}>
            <Typography fontWeight={600} color="primary" mb={2}>
              Informações de Contato
            </Typography>

            <Stack spacing={2}>
              <Box display="flex" gap={1}>
                <FontAwesomeIcon icon={faPhone} />
                <Typography variant="body2">
                  <strong>Telefone :</strong> {empresa.telefone}
                </Typography>
              </Box>
              <Box display="flex" gap={1}>
                <FontAwesomeIcon icon={faEnvelope} />
                <Typography variant="body2">
                  <strong>E-mail :</strong> {empresa.email}
                </Typography>
              </Box>
              <Box display="flex" gap={1}>
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                <Typography variant="body2">
                  <strong>Endereço :</strong> <Link href={empresa.endereco.link} underline="hover"
                  >{enderecoCompleto}</Link>
                </Typography>
              </Box>
              <Box display="flex" gap={1}>
                <FontAwesomeIcon icon={faClock} />
                <Typography variant="body2">
                  <strong>Horário :</strong> Seg–Sex: 8h às 18h | Sáb: 8h às 12h
                </Typography>
              </Box>
            </Stack>

        
          </Grid>

          {/* Formulário */}
          <Grid size={{ xs: 12, sm: 6 }} >
            <Paper
              elevation={1}
              sx={{ p: 4, borderRadius: 3 }}
            >
              <Typography variant="h6" fontWeight={600} color="primary" gutterBottom>
               Entre em contato
              </Typography>
              <FormContato />
              <Typography variant="caption" color="text.secondary" mt={1} display="block" align="center">
                * Campos obrigatórios – Resposta em até 2 horas úteis
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
