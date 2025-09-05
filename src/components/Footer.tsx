'use client';

import { Box, Container, Divider, Grid, IconButton, Stack, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import empresa from '@/data/empresa.json'; // <-- importando os dados
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { withBasePath } from '@/utils/paths';
import Link from 'next/link';

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
            <Image src={withBasePath("/logo-graja-fibra.avif")} width={200} height={48} alt="logo graja fibra" />
            <Typography variant="body2" component={'p'} mt={2} mb={2} >
              A melhor internet fibra ótica da região. Conectando você ao futuro com velocidade e qualidade.
            </Typography>
            <Typography variant="caption" component={'p'} display="block" mb={2}>
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
                src={withBasePath("/reclame-aqui-barra.webp")}
                alt="Empresa verificada Reclame Aqui"
                width={250}
                height={65}
                loading="lazy" // pode ser lazy, não é LCP
                sizes="(max-width: 600px) 50vw, 250px"
              // ajuda o browser a decidir o tamanho certo no server-render

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
                  color="grey.300"
                  passHref
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
                <Link href={`mailto:${empresa.email}`} color="grey.300">
                  {empresa.email}
                </Link>
              </Box>
              <Box display="flex" alignItems="flex-start" gap={1}>
                <FontAwesomeIcon icon={faMapMarkerAlt} style={{ marginTop: 4 }} />
                <Typography variant="body2">
                  <Link href={empresa.endereco.link}
                    color="grey.300">{enderecoCompleto}</Link>
                </Typography>
              </Box>
              <Box display="flex" alignItems="flex-start" gap={1}>
                <IconButton component="a" href='https://www.facebook.com/people/Graja-Fibra/61577130784161/' aria-label="Página da Graja Fibra no Facebook" target="_blank"
                  rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faFacebook} color='#fff' size="lg" style={{ marginTop: 4 }} aria-hidden="true" />
                </IconButton>
                <IconButton component="a" href='https://www.instagram.com/grajafibra/' aria-label="Perfil da Graja Fibra no Instagram"
                  target="_blank"
                  rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faInstagram} color='#fff' size="lg" style={{ marginTop: 4 }} aria-hidden="true" />
                </IconButton>
                <IconButton component="a" href='https://wa.me/558002950800' target="_blank"
                  rel="noopener noreferrer" aria-label="Contato da Graja Fibra no WhatsApp">
                  <FontAwesomeIcon icon={faWhatsapp} color='#fff' size="lg" style={{ marginTop: 4 }} aria-hidden="true" />
                </IconButton>
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
            <Link href="/politica-privacidade" color="grey.500">
              Política de Privacidade
            </Link>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
