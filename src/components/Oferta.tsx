'use client';

import { Box, Button, Card, CardContent, Typography, Grid, Chip, List, ListItem, ListItemIcon, ListItemText, Container, Avatar } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import ofertas from '../data/ofertas.json';
import { motion } from 'framer-motion';
import Image from 'next/image';



export default function Ofertas() {
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
            Acesse todas a promoções disponíveis no momento.
          </Typography>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Grid container spacing={3} justifyContent="center">
            {ofertas.map((oferta, i) => (
              <Grid size={{ xs: 12, md: 4 }} key={i}>
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
                      label={oferta.categoria}
                      avatar={
                        <Avatar sx={{ bgcolor: 'transparent' }}>
                          <Image src="/Discount.svg" alt="desconto promoção" width={20} height={20} />
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
                      <Image src={'/Discount.svg'} width={40} height={40} alt='desconto promoção - graja fibra' />
                    </Box>
                    <Typography variant="subtitle2" fontWeight={600}>
                      {oferta.titulo}
                    </Typography>
                    <Typography variant="h6" fontWeight={700}>
                      {oferta.destaque}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" mb={2}>
                      {oferta.descricao}
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
                    <Button
                      fullWidth
                      variant="contained"
                      sx={{ mt: 2, bgcolor: 'black', color: 'white' }}
                      href={oferta.link}
                    >
                      Aproveitar agora
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Box>
    </Container>
  );
}
