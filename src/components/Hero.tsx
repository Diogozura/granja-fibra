'use client';

import { Box, Button, Typography, Container } from '@mui/material';
import Image from 'next/image';

export default function Hero() {
  return (
    <>
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: { xs: 'auto', md: '80vh' },
          bgcolor: '#000',
          display: { xs: 'none', md: 'flex' },
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'hidden',
          px: 2,
        }}
      >
        {/* FUNDO DE IMAGEM À DIREITA */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            width: '60%',
            zIndex: 0,
            overflow: 'hidden',
          }}
        >
          <Image
            src="/hero-image-familia.png"
            alt="Família feliz"
            fill
            style={{
              objectFit: 'cover',
              objectPosition: 'center right',
              filter: 'brightness(0.9)',
            }}
          />
          {/* Degradê da esquerda pra direita */}
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to left, rgba(0,0,0,0.8), transparent)',
            }}
          />
        </Box>

        {/* CONTEÚDO POR CIMA */}
        <Container
          maxWidth="lg"
          sx={{
            position: 'relative',
            zIndex: 2,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            height: '100%',
          }}
        >
          <Box maxWidth={460}>
            {/* CARD */}
            <Box
              sx={{
                display: 'flex',
                borderRadius: 3,
                overflow: 'hidden',
                boxShadow: '0 8px 24px rgba(0,0,0,0.6)',
              }}
            >
              {/* LADO ESQUERDO - PRETO */}
              <Box
                sx={{
                  bgcolor: '#000',
                  color: '#fff',
                  p: 3,
                  flex: 1,
                  textAlign: 'left',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  gap: 1,
                  borderRight: '1px solid #444',
                }}
              >
                <Typography fontSize="0.85rem" fontWeight={600}>
                  PLANOS DE
                </Typography>
                <Typography variant="h5" fontWeight={900}>
                  250 MEGA
                </Typography>
                <Box mt={2}>
                  <Typography fontSize="0.85rem" fontWeight={600}>
                    ATÉ
                  </Typography>
                  <Typography variant="h5" fontWeight={900}>
                    750 MEGA
                  </Typography>
                  <Typography fontSize="0.85rem">DE VELOCIDADE</Typography>
                </Box>
              </Box>

              {/* LADO DIREITO - BRANCO */}
              <Box
                sx={{
                  bgcolor: '#fff',
                  color: '#000',
                  p: 3,
                  flex: 1.2,
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                <Typography fontSize="0.85rem" fontWeight={600}>
                  A PARTIR DE
                </Typography>
                <Typography variant="h4" fontWeight={900}>
                  R$ 99<small>,90</small>
                </Typography>
                <Typography variant="caption">
                  APÓS 3 MESES/ R$120,90
                </Typography>
              </Box>
            </Box>

            {/* BOTÃO */}
            <Box mt={3}>
              <Button
                variant="contained"
                fullWidth
                sx={{
                  bgcolor: '#fff',
                  color: '#000',
                  fontWeight: 700,
                  py: 1.5,
                  borderRadius: 2,
                  '&:hover': {
                    bgcolor: '#e0e0e0',
                  },
                }}
                onClick={() => window.location.href = '/contato'}
              >
                ASSINE JÁ
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
      <Box sx={{
        background: '#000',
        p:2
      }}>
        <Box
          sx={{
            display: { xs: 'flex', md: 'none' },
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            pt: 4,
          }}
        >
          <Image
            src="/hero-image-familia.png"
            alt="Família feliz"
            width={300}
            height={300}
            style={{
              borderRadius: '20px',
              objectFit: 'cover',
              boxShadow: '0 6px 20px rgba(0,0,0,0.5)',
            }}
          />

          <Box
            sx={{
              mt: 3,
              bgcolor: '#fff',
              borderRadius: 2,
              p: 2,
              width: '90%',
              maxWidth: 360,
              boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
            }}
          >
            <Typography fontSize="0.9rem" fontWeight={600} color="text.secondary">
              PLANOS DE
            </Typography>
            <Typography variant="h5" fontWeight={900}>
              250 MEGA
            </Typography>
            <Typography fontSize="0.9rem" fontWeight={600} color="text.secondary" mt={1}>
              ATÉ 750 MEGA DE VELOCIDADE
            </Typography>
            <Typography fontSize="0.9rem" fontWeight={600} color="text.secondary" mt={2}>
              A PARTIR DE
            </Typography>
            <Typography variant="h4" fontWeight={900}>
              R$ 99<small>,90</small>
            </Typography>
            <Typography variant="caption" color="text.secondary">
              APÓS 3 MESES/ R$120,90
            </Typography>
          </Box>

          <Button
            variant="contained"
            fullWidth
            sx={{
              mt: 3,
              bgcolor: '#fff',
              color: '#000',
              fontWeight: 700,
              py: 1.5,
              borderRadius: 2,
              maxWidth: 360,
              '&:hover': {
                bgcolor: '#e0e0e0',
              },
            }}
            onClick={() => window.location.href = '/assinar'}
          >
            ASSINE JÁ
          </Button>
        </Box>
      </Box>

    </>

  );
}
