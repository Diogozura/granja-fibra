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
import { useSearchParams } from 'next/navigation';

const ConsultaCEPForm = dynamic(() => import('@/components/ConsultaCEPForm'));

export default function FaleConosco() {
  const searchParams = useSearchParams();
  const planoInteresse = searchParams?.get('plano') ?? '';
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
                <Typography fontWeight={600} color="#fff">
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
          <Grid size={{ xs: 12, sm: 6 }} >
            <Paper
              elevation={1}
              sx={{ p: 4, borderRadius: 3 }}
            >
              <Typography variant="h6" fontWeight={600} color="primary" gutterBottom>
               Entre em contato
              </Typography>
              <ConsultaCEPForm planoInteresse={planoInteresse}/>
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
