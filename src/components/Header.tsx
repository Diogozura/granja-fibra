'use client';

import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Link as MuiLink,
} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const navItems = [
  { title: 'Home', link: '/' },
  { title: 'Sobre nós', link: '/sobre-nos' },
  { title: 'Nossos planos', link: '/planos' },
  { title: 'Promoções', link: '/promocoes' },
  { title: 'Graja Vantagens', link: 'https://grajavantagens.partiu.com.br/' },
  { title: 'Graja Livros', link: 'https://grajalivros.ebooks.app.br/login' },
  { title: 'Graja Revistas', link: 'https://grajarevistas.ebooks.app.br/login' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', bgcolor: 'secondary.main', height: '100%' }}>
      <Box sx={{ my: 2 }}>
        <Image src="/logo-granja-fibra.png" width={200} height={48} alt="Logo Granja Fibra" />
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.title} disablePadding>
            <Link href={item.link} passHref>
              <ListItemButton sx={{ textAlign: 'center' }}>
                <ListItemText primary={item.title} primaryTypographyProps={{
                  color: 'white',
                  fontSize: 18,
                  fontWeight: 500,
                }} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}

      </List>
      <Button
        component={Link}
        href="https://central.lewm.com.br/central_assinante_web/login"
        variant="contained"
        sx={{
          borderRadius: 2,
          textTransform: 'none',
          px: 3,
          color: '#000',
          bgcolor: '#fff',
          '&:hover': { bgcolor: '#ffffffd3' },
        }}
      >
        Central assinante
      </Button>
    </Box>
  );

  return (
    <>
      <AppBar position="sticky" color="secondary" elevation={0}>
        <Toolbar sx={{ justifyContent: 'space-between', py: 2 }}>
          {/* Logo */}
          <Box display="flex" alignItems="center">
            <Image src="/logo-granja-fibra.png" width={200} height={48} alt="Logo Granja Fibra" />
          </Box>

          {/* Menu Desktop */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 3 }}>
            {navItems.map((item) => (
              <Link key={item.title} href={item.link} passHref>
                <MuiLink component={'p'} underline="none" color="#fff">
                  {item.title}
                </MuiLink>
              </Link>
            ))}


            <Button
              component={Link}
              href="https://central.lewm.com.br/central_assinante_web/login"
              variant="contained"
              sx={{
                borderRadius: 2,
                textTransform: 'none',
                px: 3,
                color: '#000',
                bgcolor: '#fff',
                '&:hover': { bgcolor: '#ffffffd3' },
              }}
            >
              Central assinante
            </Button>
          </Box>

          {/* Botão Hamburguer */}
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton edge="end" color="inherit"       aria-label={'menu'} onClick={handleDrawerToggle}>
              <FontAwesomeIcon icon={faBars} size="lg" aria-hidden="true" focusable="false"  />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer Mobile */}
      <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
        {drawer}
      </Drawer>
    </>
  );
}
