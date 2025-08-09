'use client';

import { useEffect, useState } from 'react';
import { Box, Button, Typography, useTheme, Paper } from '@mui/material';
import Link from 'next/link';

export default function CookieBanner() {
    const [showBanner, setShowBanner] = useState(false);
    const theme = useTheme();

    useEffect(() => {
        const consent = localStorage.getItem('cookie_consent_graja_fibra');
        if (!consent) {
            setShowBanner(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookie_consent_graja_fibra', 'true');
        setShowBanner(false);
    };

    if (!showBanner) return null;

    return (
        <Box
            sx={{
                position: 'fixed',
                bottom: 24,
                left: 0,
                right: 0,
                display: 'flex',
                justifyContent: 'center',
                zIndex: 9999,
                px: 2,
            }}
        >
            <Paper
                elevation={6}
                sx={{
                    px: 3,
                    py: 2,
                    maxWidth: 600,
                    bgcolor: theme.palette.background.paper,
                    borderRadius: 2,
                    textAlign: 'center',
                }}
            >
                <Typography variant="body2" sx={{ mb: 1.5 }}>
                    Usamos cookies para melhorar sua experiência. Ao continuar, você aceita nossa{' '}
                    <Link href="/politica-privacidade" target="_blank" rel="noopener" passHref>
                        Política de Privacidade
                    </Link>.
                </Typography>
                <Button variant="contained" color="primary" onClick={handleAccept} size="small">
                    Aceitar
                </Button>
            </Paper>
        </Box>
    );
}
