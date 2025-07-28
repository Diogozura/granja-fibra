// app/not-found.tsx
'use client';

import { Box, Typography, Button } from '@mui/material';
import Link from 'next/link';

export default function NotFound() {
    return (
        <Box
            sx={{
                minHeight: '100vh',
                bgcolor: '#111',
                color: 'white',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                p: 4,
            }}
        >
            {/* LOGO */}
            <Box
                component="img"
                src="/logo-granja-fibra.png" // <- ajuste para o caminho correto da sua logo
                alt="GWA Logo"
                sx={{
                    width: 120,
                    mb: 4,
                }}
            />
            <Typography component={'h1'} variant="h2" gutterBottom>
                404
            </Typography>
            <Typography component={'h2'} variant="h5" gutterBottom>
                 Página não encontrada 😢
            </Typography>

            <Button
                component={Link}
                href="/"
                variant="contained"
                sx={{ mt: 3, fontWeight: 'bold' }}
            >
                voltar para home
            </Button>
        </Box>
    );
}
