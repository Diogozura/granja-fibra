'use client';

import { Box, Container, Divider, Grid, Link, Stack, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import empresa from '@/data/empresa.json'; // <-- importando os dados
import planosFooter from '@/data/planosFooter.json'; // <-- importando os dados
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const linksUteis = [
  {
    title: 'Faq',
    link: '/faq'
  },
  {
    title: 'Contato',
    link: '/contato'
  },
  {
    title: 'Benefícios',
    link: '/benefícios'
  },
  {
    title: 'Contato Central do Cliente',
    link: '/whatsp'
  },
  {
    title: 'Área de Cobertura',
    link: '/area-cobertura'
  },
];

const Footer = () => {
  const enderecoCompleto = `${empresa.endereco.logradouro}, ${empresa.endereco.numero} – ${empresa.endereco.complemento}
${empresa.endereco.bairro}, ${empresa.endereco.cidade} – ${empresa.endereco.estado}`;

  const { planos } = planosFooter;

  return (
    <Box sx={{ bgcolor: 'secondary.main', color: 'white', pt: 8, pb: 4 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Logo + texto */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Image src="/logo-granja-fibra.png" width={200} height={48} alt="logo" />
            <Typography variant="body2" mt={2} mb={2} color="grey.400">
              A melhor internet fibra ótica da região. Conectando você ao futuro com velocidade e qualidade.
            </Typography>
            <Typography variant="caption" display="block" color="grey.600">
              {empresa.nomeEmpresa}
              <br />
              CNPJ {empresa.cnpj}
              <br />
              Licença da Anatel - Processo 53500.101370/2024-74
            </Typography>
          </Grid>

          {/* Planos */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
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
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography fontWeight={600} mb={2}>
              Links Úteis
            </Typography>
            <Stack spacing={1}>
              {linksUteis.map((item) => (
                <Link
                  key={item.title}
                  href={item.link}
                  underline="hover"
                  color="grey.300"
                  sx={{ fontSize: 14 }}
                >
                  {item.title}
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* Contato */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }} >
            <Typography fontWeight={600} mb={2}>
              Contato
            </Typography>
            <Stack spacing={1}>
              <Box display="flex" alignItems="center" gap={1}>
                <FontAwesomeIcon icon={faPhone} />
                <Typography variant="body2">{empresa.telefone}</Typography>
              </Box>
              <Box display="flex" alignItems="center" gap={1}>
                <FontAwesomeIcon icon={faEnvelope} />
                <Link href={`mailto:${empresa.email}`} underline="hover" color="grey.300">
                  {empresa.email}
                </Link>
              </Box>
              <Box display="flex" alignItems="flex-start" gap={1}>
                <FontAwesomeIcon icon={faMapMarkerAlt} style={{ marginTop: 4 }} />
                <Typography variant="body2">
                  <Link href={empresa.endereco.link}  underline="hover"
                  color="grey.300">{enderecoCompleto}</Link>
                </Typography>
              </Box>
              <Box display="flex" alignItems="flex-start" gap={1}>
                <Link href='https://www.facebook.com/people/Graja-Fibra/61577130784161/'>
                  <FontAwesomeIcon icon={faFacebook}  color='#fff' style={{ marginTop: 4 }} />
                </Link>
                <Link href='https://www.instagram.com/grajafibra/'>
                  <FontAwesomeIcon icon={faInstagram}  color='#fff' style={{ marginTop: 4 }} />
                </Link>
                <Link href='https://api.whatsapp.com/send/?phone=558002950800&text=Ol%C3%A1%2C+tenho+algumas+d%C3%BAvidas+referente+a+Internet+da+Graja%25Fibra&type=phone_number&app_absent=0'>
                  <FontAwesomeIcon icon={faWhatsapp}  color='#fff' style={{ marginTop: 4 }} />
                </Link>
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
          <Typography variant="caption">© 2001- 2025 GrajaFibra. Todos os direitos reservados.</Typography>
          <Stack direction="row" spacing={3}>
            <Link href="/politica-privacidade" underline="hover" color="grey.500">
              Política de Privacidade
            </Link>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
