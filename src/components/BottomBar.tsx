'use client';

import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export default function BottomBar() {
    return (
        <Box
            sx={{
                position: 'fixed',
                bottom: 0,
                width: '100%',
                height: 48,
                bgcolor: '#000',
                color: '#fff',
                display: { xs: 'flex', sm: 'none' },
                alignItems: 'center',
                justifyContent: 'space-between',
                px: 2,
                zIndex: 9999,
            }}
        >
            {/* WhatsApp botão */}
            <Box
                component="a"
                href="/assinar"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    textDecoration: 'none',
                    color: '#fff',
                    gap: 1,
                }}
            >
                <FontAwesomeIcon icon={faWhatsapp} size="2x" style={{ color: '#25D366' }} />
                <Typography fontWeight={700} variant='h6'>
                    Assine já!
                </Typography>
            </Box>

            {/* Verificação Reclame Aqui */}
            <Box
                component={'a'}
                href='https://www.reclameaqui.com.br/empresa/graja-fibra'
            >
                <Image
                    src="/reclame-aqui-barra.webp"
                    alt="Empresa verificada Reclame Aqui"
                    width={100}
                    height={30}
                    priority
                    fetchPriority="high"
                    // ajuda o browser a decidir o tamanho certo no server-render
                    sizes="(max-width: 900px) 100vw, 70vw"
                />
            </Box>


        </Box>
    );
}
