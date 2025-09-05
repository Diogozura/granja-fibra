'use client';

import { useState } from 'react';
import {
  Box,
  Button,
  TextField,
  Typography,
  Grid,
} from '@mui/material';

export default function FormContato() {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [sucesso, setSucesso] = useState<string | null>(null);
  const [erro, setErro] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErro(null);
    setSucesso(null);

    const formData = new FormData();
    formData.append('nome', nome);
    formData.append('telefone', telefone);
    formData.append('email', email);
    formData.append('mensagem', mensagem);

    try {
      const res = await fetch('https://qrcode.grajafibra.net.br/sistema_avaliacoes/form-contato.php', {
        method: 'POST',
        body: formData,
      });

      if (res.ok) {
        setSucesso('Solicitação enviada com sucesso!');
        setNome('');
        setTelefone('');
        setEmail('');
        setMensagem('');
      } else {
        setErro('Erro ao enviar. Tente novamente.');
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setErro('Erro de conexão com o servidor.');
    }
  };

  return (
    <Box mt={4} component="form" onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, sm: 6 }}>
          <TextField
            fullWidth
            label="Nome completo"
            size="small"
            required
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <TextField
            fullWidth
            label="Telefone/WhatsApp"
            size="small"
            required
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
          />
        </Grid>
        <Grid size={12}>
          <TextField
            fullWidth
            label="E-mail"
            size="small"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Grid>
        <Grid size={12}>
          <TextField
            fullWidth
            label="Mensagem (opcional)"
            multiline
            rows={3}
            size="small"
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
          />
        </Grid>
      </Grid>
      <Button
        type="submit"
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

      {sucesso && (
        <Typography mt={2} color="green">
          {sucesso}
        </Typography>
      )}
      {erro && (
        <Typography mt={2} color="red">
          {erro}
        </Typography>
      )}
    </Box>
  );
}
