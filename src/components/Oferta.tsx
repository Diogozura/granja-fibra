'use client';

import { memo, useEffect, useState } from 'react';
import Link from 'next/link';
import { Box, Button, Card, CardContent, Typography, Grid, Chip, List, ListItem, ListItemIcon, ListItemText, Container, Avatar } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { withBasePath } from '@/utils/paths';


interface Oferta {
  promocao: string;
  preco: string;
  beneficios: string[];
}

interface DadosOfertas {
  ofertas: {
    dataOfertaValida: string;
    promocoes: Oferta[];
  };
}


function Ofertas() {

  const [dados, setDados] = useState<DadosOfertas | null>(null);

  useEffect(() => {
    fetch('https://qrcode.grajafibra.net.br/sistema_avaliacoes/dados.php')
      .then((res) => res.json())
      .then((data) => {
        const ofertas = data?.ofertas; // Pula a primeira posição

        setDados({
          ofertas
        });
      });
  }, []);


  return (
    <Container maxWidth="lg">
      <Box py={8}>
        <Grid container spacing={3} justifyContent="center">
          {dados?.ofertas.promocoes.map((oferta, i) => (
            <Grid
              size={{ xs: 12, md: 4 }}

              key={i}
              component={motion.div}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Card
                sx={{
                  border: '1px solid transparent',
                  boxShadow: 2,
                  transition: 'all 0.3s',
                  borderRadius: 3,
                  '&:hover': {
                    borderColor: 'primary.main',
                    boxShadow: 4,
                  },
                }}
              >
                <CardContent sx={{ textAlign: 'center' }}>
                  <Chip
                    label='OFERTA'
                    avatar={
                      <Avatar sx={{ bgcolor: 'transparent' }}>
                        <Image
                          src={withBasePath("/Discount.svg")}
                          alt="desconto promoção"
                          width={20}
                          height={20}
                          loading="lazy"
                        />
                      </Avatar>
                    }
                    sx={{
                      bgcolor: 'black',
                      color: 'white',
                      borderRadius: '12px',
                      mb: 2,
                    }}
                  />

                  <Box
                    sx={{
                      width: 60,
                      height: 60,
                      mx: 'auto',
                      mb: 2,
                      bgcolor: 'black',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Image
                      src={withBasePath("/Discount.svg")}
                      width={40}
                      height={40}
                      alt="desconto promoção - graja fibra"
                      loading="lazy"
                    />
                  </Box>

                  <Typography variant="h6" fontWeight={700}>
                    {oferta.promocao}
                  </Typography>


                  <List dense>
                    {oferta.beneficios.map((beneficio, j) => (
                      <ListItem key={j} disablePadding>
                        <ListItemIcon>
                          <FontAwesomeIcon icon={faCheck} color="green" />
                        </ListItemIcon>
                        <ListItemText primary={beneficio} />
                      </ListItem>
                    ))}
                  </List>
                  <Typography variant="h6" mt={1} fontWeight={600}>
                    {oferta.preco}
                  </Typography>
                  <Link href={`/assinar`} passHref>
                    <Button
                      fullWidth
                      variant="contained"
                      sx={{ mt: 2, bgcolor: 'black', color: 'white' }}
                    >
                      Assine já
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Box component={'aside'} textAlign={'center'}>
          <Typography component={'p'} variant='body2'>*Consulte a disponibilidade para sua regiao.</Typography>
          <Typography component={'p'} variant='body2'>**Sujeito a analise de credito.</Typography>
          {dados?.ofertas?.dataOfertaValida && (
            <Typography component="p" variant="body2">
              ***Promoção válida até {dados.ofertas?.dataOfertaValida}.
            </Typography>
          )}
        </Box>

      </Box>
    </Container>
  );
}

export default memo(Ofertas);
