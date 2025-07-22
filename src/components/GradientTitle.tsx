'use client';

import { Typography, TypographyProps } from '@mui/material';

export default function GradientTitle(props: TypographyProps) {
  return (
    <Typography
      {...props}
      sx={{
        ...props.sx,
        fontWeight: 600,
        background: 'linear-gradient(83deg, #788DFE, #AA86D8)',
        backgroundSize: '200% auto',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        color: 'transparent',
        WebkitTextFillColor: 'transparent',
        animation: 'gradient-wave 4s ease infinite',
      }}
    />
  );
}
