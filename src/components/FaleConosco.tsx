'use client';

import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Stack,
  TextField,
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

export default function FaleConosco() {
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
          <Grid size={{xs:12, sm:6}}>
            <Typography fontWeight={600} color="primary" mb={2}>
              Informações de Contato
            </Typography>

            <Stack spacing={2}>
              <Box display="flex" gap={1}>
                <FontAwesomeIcon icon={faPhone} />
                <Typography variant="body2">
                  <strong>Telefone :</strong> (11) 99999-9999
                </Typography>
              </Box>
              <Box display="flex" gap={1}>
                <FontAwesomeIcon icon={faEnvelope} />
                <Typography variant="body2">
                  <strong>E-mail :</strong> contato@grajafibra.com.br
                </Typography>
              </Box>
              <Box display="flex" gap={1}>
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                <Typography variant="body2">
                  <strong>Endereço :</strong> Rua Principal, 123 – Centro
                </Typography>
              </Box>
              <Box display="flex" gap={1}>
                <FontAwesomeIcon icon={faClock} />
                <Typography variant="body2">
                  <strong>Horário :</strong> Seg–Sex: 8h às 18h | Sáb: 8h às 12h
                </Typography>
              </Box>
            </Stack>

            {/* Instalação Express */}
            <Paper
              elevation={0}
              sx={{
                bgcolor: 'secondary.main',
                color: '#fff',
                mt: 5,
                p: 3,
                borderRadius: 3,
              }}
            >
              <Box display="flex" alignItems="center" gap={1} mb={1}>
                <FontAwesomeIcon icon={faRocket} />
                <Typography fontWeight={600} color="primary">
                  Instalação Express
                </Typography>
              </Box>
              <Typography variant="body2" mb={2}>
                Instalação em até 48 horas úteis! Nossa equipe técnica agenda conforme sua disponibilidade.
              </Typography>
              <Stack spacing={1}>
                {[
                  'Sem taxa de instalação',
                  'Sem taxa de adesão',
                  'Roteador Wi-Fi incluso',
                  'Teste de velocidade na hora',
                ].map((text, i) => (
                  <Box key={i} display="flex" alignItems="center" gap={1}>
                    <FontAwesomeIcon icon={faCheck} color="limegreen" />
                    <Typography variant="body2">{text}</Typography>
                  </Box>
                ))}
              </Stack>
            </Paper>
          </Grid>

          {/* Formulário */}
          <Grid size={{xs:12, sm:6}} >
            <Paper
              elevation={1}
              sx={{ p: 4, borderRadius: 3 }}
            >
              <Typography variant="h6" fontWeight={600} color="primary" gutterBottom>
                Solicite sua instalação
              </Typography>
              <Grid container spacing={2}>
                <Grid size={{xs:12, sm:6}}>
                  <TextField fullWidth label="Nome completo *" size="small" />
                </Grid>
                <Grid size={{xs:12, sm:6}}>
                  <TextField fullWidth label="Telefone/WhatsApp *" size="small" />
                </Grid>
                <Grid size={12}>
                  <TextField fullWidth label="E-mail *" size="small" />
                </Grid>
                <Grid size={12}>
                  <TextField fullWidth label="Endereço completo *" size="small" />
                </Grid>
                <Grid size={12}>
                  <TextField fullWidth label="Plano de interesse" size="small" />
                </Grid>
                <Grid size={12}>
                  <TextField
                    fullWidth
                    label="Mensagem (opcional)"
                    multiline
                    rows={3}
                    size="small"
                  />
                </Grid>
              </Grid>
              <Button
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  bgcolor: '#111',
                  textTransform: 'none',
                  '&:hover': { bgcolor: '#000' },
                }}
              >
                Enviar Solicitação
              </Button>
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
