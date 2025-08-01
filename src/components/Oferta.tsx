'use client';

import { memo, useEffect, useState } from 'react';
import Link from 'next/link';
import { Box, Button, Card, CardContent, Typography, Grid, Chip, List, ListItem, ListItemIcon, ListItemText, Container, Avatar } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import Image from 'next/image';
// import ofertas from '../data/ofertas.json';


interface Ofertas {
  promocao: string;
  velocidade: string;
  descricao: string;
  preco: string;
  precoOriginal: string;
  destaque: boolean;
  beneficios: string[];

}

function Ofertas() {

  const [ofertas, setOfertas] = useState<Ofertas[]>([]);

  useEffect(() => {
    fetch('https://qrcode.grajafibra.inf.br/sistema_avaliacoes/dados.php')
      .then((res) => res.json())
      .then((data) => setOfertas(data.ofertas));
  }, []);


  return (
    <Container maxWidth="lg">
      <Box py={8}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Typography variant="h4" align="center" fontWeight={600}>
            Promoções Disponíveis
          </Typography>
          <Typography align="center" color="text.secondary" mb={4}>
            Acesse todas as promoções disponíveis no momento.
          </Typography>
        </motion.div>

        <Grid container spacing={3} justifyContent="center">
          {ofertas.map((oferta, i) => (
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
                          src="/Discount.svg"
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
                      src="/Discount.svg"
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
      </Box>
    </Container>
  );
}

export default memo(Ofertas);
