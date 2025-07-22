'use client';

import { Box, Container, Divider, Grid, Link, Stack, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

const planos = [
  { nome: 'Essencial', velocidade: '200 Mbps' },
  { nome: 'Família', velocidade: '500 Mbps' },
  { nome: 'Turbo', velocidade: '1000 Mbps' },
  { nome: 'Empresarial', velocidade: '2100 Mbps' },
];

const linksUteis = ['Faq', 'Contato', 'Benefícios', 'Contato Central do Cliente', 'Área de Cobertura'];

const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'secondary.main', color: 'white', pt: 8, pb: 4 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Logo + texto */}
          <Grid size={{xs:12, sm:6, md:3}}>
            <Image src="/logo-granja-fibra.png" width={160} height={45} alt="logo" />
            <Typography variant="body2" mt={2} mb={2} color="grey.400">
              A melhor internet fibra ótica da região. Conectando você ao futuro com velocidade e qualidade.
            </Typography>
            <Typography variant="caption" display="block" color="grey.600">
              GRAJA FIBRA TELECOMUNICAÇÕES LTDA
              <br />
              CNPJ 57.962.323/0001-83
              <br />
              Licença da Anatel - Processo 53500.101370/2024-74
            </Typography>
          </Grid>

          {/* Planos */}
          <Grid size={{xs:12, sm:6, md:3}}>
            <Typography fontWeight={600} mb={2}>
              Nossos Planos
            </Typography>
            <Stack spacing={1}>
              {planos.map((plano) => (
                <Typography key={plano.nome} variant="body2">
                  {plano.nome} – <strong>{plano.velocidade}</strong>
                </Typography>
              ))}
            </Stack>
          </Grid>

          {/* Links Úteis */}
          <Grid size={{xs:12, sm:6, md:3}}>
            <Typography fontWeight={600} mb={2}>
              Links Úteis
            </Typography>
            <Stack spacing={1}>
              {linksUteis.map((link) => (
                <Link
                  key={link}
                  href="#"
                  underline="hover"
                  color="grey.300"
                  sx={{ fontSize: 14 }}
                >
                  {link}
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* Contato */}
          <Grid size={{xs:12, sm:6, md:3}} >
            <Typography fontWeight={600} mb={2}>
              Contato
            </Typography>
            <Stack spacing={1}>
              <Box display="flex" alignItems="center" gap={1}>
                <FontAwesomeIcon icon={faPhone} />
                <Typography variant="body2">0800 295 0800</Typography>
              </Box>
              <Box display="flex" alignItems="center" gap={1}>
                <FontAwesomeIcon icon={faEnvelope} />
                <Link href="mailto:contato@grajafibra.com.br" underline="hover" color="grey.300">
                  contato@grajafibra.com.br
                </Link>
              </Box>
              <Box display="flex" alignItems="flex-start" gap={1}>
                <FontAwesomeIcon icon={faMapMarkerAlt} style={{ marginTop: 4 }} />
                <Typography variant="body2">
                  Avenida Ernesto João Marcelino, 2241 – Sala 01 <br />
                  Fazenda da Ilha, Embu Guaçu – SP
                </Typography>
              </Box>
            </Stack>
          </Grid>
        </Grid>

        {/* Divider */}
        <Divider sx={{ my: 4, borderColor: 'primary.main' }} />

        {/* Copyright */}
        <Box
          display="flex"
          justifyContent="space-between"
          flexWrap="wrap"
          gap={2}
          fontSize={13}
          color="grey.500"
        >
          <Typography variant="caption">© 2024 GrajaFibra. Todos os direitos reservados.</Typography>
          <Stack direction="row" spacing={3}>
            <Link href="#" underline="hover" color="grey.500">
              Política de Privacidade
            </Link>
            <Link href="#" underline="hover" color="grey.500">
              Termos de Uso
            </Link>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
