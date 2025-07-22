// src/theme/theme.d.ts
import type {} from '@mui/material/styles';

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    gradientTitle: true;
  }
}
