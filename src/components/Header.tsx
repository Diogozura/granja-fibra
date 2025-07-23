'use client';

import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Link as MuiLink,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

const navItems = [
  {
  title:'Inicio',
  link:'/'
},
  {
  title:'Sobre',
  link:'/sobre-nos'
},
  {
  title:'Planos',
  link:'/planos'
},
  {
  title:'Ofertas',
  link:'/ofertas'
},
  {
  title:'Contato',
  link:'/contato'
},
  {
  title:'Faq',
  link:'/faq'
},

];

export default function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', bgcolor: 'secondary.main', height: '100%' }}>
      <Box sx={{ my: 2 , p:1}}>
        <Image src="/logo-granja-fibra.png" width={200} height={45} alt="logo graja fibra" />
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.title} disablePadding>
            <ListItemButton sx={{ textAlign: 'center'  }}>
              <ListItemText
                primary={
                  <MuiLink href={item.link} underline="none" fontSize={20} color="white">
                    {item.title}
                  </MuiLink>
                }
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="static" color="secondary" elevation={0}>
        <Toolbar sx={{ justifyContent: 'space-between', py: 2 }}>
          <Box display="flex" alignItems="center" gap={1}>
            <Image src="/logo-granja-fibra.png" width={180} height={50} alt="logo graja fibra" />
          </Box>

          {isMobile ? (
            <IconButton edge="end" color="inherit" aria-label="menu" onClick={handleDrawerToggle}>
               <FontAwesomeIcon icon={faBars} color="#ffffff" size="lg" />
            </IconButton>
          ) : (
            <Box display="flex" alignItems="center" gap={4}>
              {navItems.map((item) => (
                <MuiLink key={item.title} href={item.link} underline="none" color="#fff">
                  {item.title}
                </MuiLink>
              ))}
              <Button
                variant="contained"
                sx={{
                  borderRadius: 2,
                  textTransform: 'none',
                  px: 3,
                  bgcolor: 'primary.main',
                  '&:hover': { bgcolor: 'primary.dark' },
                }}
              >
                Contrato Agora
              </Button>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
        {drawer}
      </Drawer>
    </>
  );
}
