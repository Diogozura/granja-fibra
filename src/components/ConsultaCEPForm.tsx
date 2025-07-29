'use client';

import { useState } from 'react';
import {
  Box,
  Button,
  TextField,
  Typography,
  Grid,
  Paper,
  MenuItem,
} from '@mui/material';
import dados from '@/data/planosEOfertas.json';

type DadosCep = {
  cidade: string;
  estado: string;
  rua: string;
  bairro: string;
};

type Props = {
  planoInteresse?: string;
};

export default function ConsultaCEPForm({ planoInteresse = '' }: Props) {

  const [cep, setCep] = useState('');
  const [dadosCep, setDadosCep] = useState<DadosCep | null>(null);
  const [mensagem, setMensagem] = useState('');
  const { planos } = dados;



  return (
    <Box mt={4}>
    
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField fullWidth label="Nome completo *" size="small" />
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField fullWidth label="Telefone/WhatsApp *" size="small" />
          </Grid>
          <Grid size={12}>
            <TextField fullWidth label="E-mail *" size="small" />
          </Grid>
          <Grid size={12}>
            <TextField
              fullWidth
              label="Mensagem (opcional)"
              multiline
              rows={3}
              size="small"
            />
          </Grid>
        </Grid>
        <Button
          fullWidth
          variant="contained"
          sx={{
            mt: 3,
            bgcolor: '#111',
            textTransform: 'none',
            '&:hover': { bgcolor: '#000' },
          }}
        >
          Enviar Solicitação
        </Button>
   

    </Box>
  );
}
