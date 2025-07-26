'use client';

import { Box, Button, Card, CardContent, Typography, Grid, Chip, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faStar } from '@fortawesome/free-solid-svg-icons';
import ofertas from '../data/ofertas.json';

const iconMap = {
  'fa-star': faStar,
};

export default function Ofertas() {
  return (
    <Box py={8}>
      <Typography variant="h4" align="center" fontWeight={600}>
        Promoções Disponíveis
      </Typography>
      <Typography align="center" color="text.secondary" mb={4}>
        Acesse todas a promoções disponíveis no momento.
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {ofertas.map((oferta, i) => (
          <Grid size={{xs:12, md:4}}  key={i}>
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
                  <FontAwesomeIcon icon={faStar} color="white" />
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
    </Box>
  );
}
