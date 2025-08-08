'use client';

import { Box, Button, Typography } from '@mui/material';
import Image from 'next/image';

export default function Hero() {
  return (
    <>
      {/* pc S */}
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: { xs: 'auto', md: '100vh' },
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
            width: '70%',
            zIndex: 0,
            overflow: 'hidden',
          }}
        >
          <Image
            src="/hero-image-familia.webp"
            alt="Família feliz"
            fill
            decoding="async"
            fetchPriority="high"
            loading="eager"
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
        <Box
          sx={{
            width: '100%',
            position: 'relative',
            zIndex: 2,
            p: 4,
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
                  500 MEGA
                </Typography>
                <Box mt={2}>
                  <Typography fontSize="0.85rem" fontWeight={600}>
                    ATÉ
                  </Typography>
                  <Typography variant="h5" fontWeight={900}>
                    ATÉ 750 MEGA
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
                onClick={() => window.location.href = '/assinar'}
              >
                ASSINE JÁ
              </Button>
            </Box>
          </Box>

        </Box>
      </Box>
      {/* mobile  */}
      <Box
        sx={{
          position: 'relative',
          height: '90vh',
          display: { xs: 'block', md: 'none' },
          overflow: 'hidden',
          backgroundColor: '#000',
        }}
      >
        {/* Imagem de fundo */}
        <Image
          src="/hero-image-familia.webp"
          alt="Família feliz"
          fill
          decoding="async"
          fetchPriority="high"
          loading="eager"
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
            filter: 'brightness(0.7)',
          }}
        />

        {/* Degradê por cima */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.2))',
          }}
        />

        {/* Conteúdo centralizado */}
        <Box
          sx={{
            position: 'absolute',
            zIndex: 2,
            top: '65%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '90%',
            maxWidth: 360,
            textAlign: 'center',
          }}
        >
          <Box
            sx={{
              bgcolor: '#fff',
              borderRadius: 3,
              px: 3,
              py: 4,
              boxShadow: '0 6px 20px rgba(0,0,0,0.3)',
            }}
          >
            <Typography fontSize="0.9rem" fontWeight={600} color="text.secondary">
              PLANOS DE
            </Typography>
            <Typography variant="h5" fontWeight={900}>
              500 MEGA
            </Typography>
            <Typography fontSize="0.9rem" fontWeight={600} color="text.secondary" mt={1}>
              ATÉ 750 MEGA
            </Typography>
            <Typography fontSize="0.9rem" fontWeight={600} color="text.secondary" mt={2}>
              A PARTIR DE
            </Typography>
            <Typography variant="h4" fontWeight={900}>
              R$ 99<small>,90</small>
            </Typography>

          </Box>

          <Button
            variant="contained"
            fullWidth
            sx={{
              mt: 2,
              bgcolor: '#fff',
              color: '#000',
              fontWeight: 700,
              py: 1.5,
              borderRadius: 2,
              '&:hover': {
                bgcolor: '#eee',
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
