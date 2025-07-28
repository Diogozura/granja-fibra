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
  const [liberarFormulario, setLiberarFormulario] = useState(false);
  const { planos } = dados;

  const consultarCep = async () => {
    const cepLimpo = cep.replace(/\D/g, '');
    if (cepLimpo.length !== 8) {
      setMensagem('❌ CEP inválido');
      setLiberarFormulario(false);
      return;
    }

    try {
      const res = await fetch(`http://localhost/sistema_avaliacoes/consultaCep.php?cep=${cepLimpo}`);
      const data = await res.json();

      if (data.autorizado) {
        setMensagem(`✅ Atendemos sua região: ${data.dados.cidade} - ${data.dados.estado}`);
        setDadosCep(data.dados);
        setLiberarFormulario(true);
      } else {
        setMensagem(data.mensagem || '❌ Não trabalhamos nessa região');
        setLiberarFormulario(false);
      }
    } catch {
      setMensagem('Erro ao consultar o CEP');
      setLiberarFormulario(false);
    }
  };

  return (
    <Box mt={4}>
      {!liberarFormulario && (
        <>
          <Typography fontWeight={600} mb={1}>
            Verifique se atendemos sua região
          </Typography>
          <Box display="flex" gap={1}>
            <TextField
              label="Digite seu CEP"
              value={cep}
              onChange={(e) => setCep(e.target.value)}
              size="small"
              fullWidth
            />
            <Button onClick={consultarCep} variant="contained">
              Verificar
            </Button>
          </Box>
          {mensagem && (
            <Typography mt={1} color={liberarFormulario ? 'green' : 'error'}>
              {mensagem}
            </Typography>
          )}
        </>
      )}

      {liberarFormulario && (
        <Paper elevation={1} sx={{ p: 3, mt: 4, borderRadius: 2 }}>
          <Typography variant="h6" fontWeight={600} color="primary" gutterBottom>
            Solicite sua instalação
          </Typography>
          <Grid container spacing={2}>
            <Grid size={{xs:12, sm:6}}>
              <TextField fullWidth label="Nome completo *" size="small" />
            </Grid>
            <Grid size={{xs:12, sm:6}}>
              <TextField fullWidth label="Telefone/WhatsApp *" size="small" />
            </Grid>
            <Grid size={12}>
              <TextField fullWidth label="E-mail *" size="small" />
            </Grid>
            <Grid size={12}>
              <TextField
                fullWidth
                label="Endereço completo *"
                defaultValue={`${dadosCep?.rua ?? ''}, ${dadosCep?.bairro ?? ''}`}
                size="small"
              />
            </Grid>
            <Grid size={12}>
              <TextField
                select
                fullWidth
                label="Plano de interesse"
                size="small"
                defaultValue={planoInteresse}
              >
                {planos.map((plano, i) => (
                  <MenuItem key={i} value={plano.nome}>
                    {plano.nome} – {plano.velocidade}
                  </MenuItem>
                ))}
              </TextField>
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
        </Paper>
      )}
    </Box>
  );
}
