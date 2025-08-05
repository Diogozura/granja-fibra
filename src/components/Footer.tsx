'use client';

import { Box, Container, Divider, Grid, Link, Stack, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import empresa from '@/data/empresa.json'; // <-- importando os dados
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const linksUteis = [
  {
    title: 'Promoções',
    link: '/promocoes' 
  },
  {
    title: 'Graja Vantagens',
    link: 'https://grajavantagens.partiu.com.br/' 
  },
  {
    title: 'Graja Livros',
    link: 'https://grajalivros.ebooks.app.br/login'
  },
  {
    title: 'Graja Revistas',
    link: 'https://grajarevistas.ebooks.app.br/login'
  },
  {
    title: 'Contato Central do Cliente',
    link: 'https://central.lewm.com.br/central_assinante_web/login'
  },
  {
    title: 'Contato',
    link: '/contato'
  },
];

const Footer = () => {
  const enderecoCompleto = `${empresa.endereco.logradouro}, ${empresa.endereco.numero} – ${empresa.endereco.complemento}
${empresa.endereco.bairro}, ${empresa.endereco.cidade} – ${empresa.endereco.estado}`;



  return (
    <Box sx={{ bgcolor: 'secondary.main', color: 'white', pt: 8, pb: 4 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent={'space-between'}>
          {/* Logo + texto */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Image src="/logo-granja-fibra.png" width={200} height={48} alt="logo" />
            <Typography variant="body2" mt={2} mb={2} color="grey.400">
              A melhor internet fibra ótica da região. Conectando você ao futuro com velocidade e qualidade.
            </Typography>
            <Typography variant="caption" display="block" color="grey.600" mb={2}>
              {empresa.nomeEmpresa}
              <br />
              CNPJ {empresa.cnpj}
              <br />
              Licença da Anatel - Processo 53500.101370/2024-74
            </Typography>
            <Box
              
              component={'a'}
              href='https://www.reclameaqui.com.br/empresa/graja-fibra'
            >
              <Image
                src="/reclame-aqui-barra.webp"
                alt="Empresa verificada Reclame Aqui"
                width={250}
                height={61}
              />
            </Box>
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
                  <Link href={empresa.endereco.link} underline="hover"
                    color="grey.300">{enderecoCompleto}</Link>
                </Typography>
              </Box>
              <Box display="flex" alignItems="flex-start" gap={1}>
                <Link href='https://www.facebook.com/people/Graja-Fibra/61577130784161/'>
                  <FontAwesomeIcon icon={faFacebook} color='#fff' style={{ marginTop: 4 }} />
                </Link>
                <Link href='https://www.instagram.com/grajafibra/'>
                  <FontAwesomeIcon icon={faInstagram} color='#fff' style={{ marginTop: 4 }} />
                </Link>
                <Link href='https://wa.me/558002950800'>
                  <FontAwesomeIcon icon={faWhatsapp} color='#fff' style={{ marginTop: 4 }} />
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
