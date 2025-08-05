'use client';

import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { formatPhone } from '@/utils/formatPhone'; // ou onde estiver salva

export default function VerificacaoEndereco() {
  const [cep, setCep] = useState('');
  const [numero, setNumero] = useState('');
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [liberarFormulario, setLiberarFormulario] = useState(false);
  const [tentouConsultar, setTentouConsultar] = useState(false);
  const [planos, setPlanos] = useState<{ promocao: string }[]>([]);
  const [planoSelecionado, setPlanoSelecionado] = useState('');

  useEffect(() => {
    fetch('https://qrcode.grajafibra.inf.br/sistema_avaliacoes/dados.php')
      .then(res => res.json())
      .then(data => {
        const planosComuns = data.planos || [];
        const ofertas = data.ofertas || [];

        // Junta tudo
        const todos = [...planosComuns, ...ofertas];

        setPlanos(todos); // continua usando o mesmo estado
      })
      .catch(() => setPlanos([]));
  }, []);


  const consultarCep = async () => {
    setTentouConsultar(true);
    const cepLimpo = cep.replace(/\D/g, '');
    if (cepLimpo.length !== 8) {
      setMensagem('❌ CEP inválido');
      setLiberarFormulario(false);
      return;
    }
    try {
      const res = await fetch(
        // `https://qrcode.grajafibra.inf.br/sistema_avaliacoes/consultaCep.php?cep=${cepLimpo}`
        ` http://localhost/sistema_avaliacoes/consultaCep.php?cep=${cepLimpo}`

      );
      const data = await res.json();

      if (data.autorizado) {
        setMensagem(`✅ Atendemos sua região: ${data.dados.cidade} - ${data.dados.estado}`);
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
  const handleEnviar = async () => {
    const payload = {
      nome,
      telefone,
      cep,
      numero,
      plano: planoSelecionado, // novo campo!
    };

    const res = await fetch('https://qrcode.grajafibra.inf.br/sistema_avaliacoes/salvarLead.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    if (data.sucesso && data.redirect_url) {
      window.location.href = data.redirect_url;
    } else {
      alert('Erro ao salvar. Tente novamente.');
    }
  };
  return (
    <Container maxWidth="sm" sx={{ py: 6 }}>
      {/* Passo 1: Digitar CEP e número */}
      <Typography variant="h6" fontWeight={700} mb={2}>
        Digite seu CEP:
      </Typography>

      <Grid container spacing={2}>
        <Grid size={12}>
          <TextField
            label="CEP"
            fullWidth
            value={cep}
            onChange={(e) => setCep(e.target.value)}
            inputProps={{ maxLength: 9 }}
          />
        </Grid>
        <Grid size={12}>
          <Button fullWidth variant="contained" onClick={consultarCep}>
            Consultar CEP
          </Button>
        </Grid>
      </Grid>

      {/* Mensagem de status */}
      {tentouConsultar && (
        <Typography mt={3} fontWeight={600}>
          {mensagem}
        </Typography>
      )}

      {/* Passo 2: Formulário se positivo */}
      {liberarFormulario && (
        <Box mt={4}>
          <TextField
            label="Qual seu nome?"
            fullWidth
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            sx={{ mb: 2 }}
          />
          <TextField
            label="Informe o telefone"
            fullWidth
            value={telefone}
            onChange={(e) => setTelefone(formatPhone(e.target.value))}
            sx={{ mb: 2 }}
          />
          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel>Escolha um plano</InputLabel>
            <Select
              value={planoSelecionado}
              onChange={(e) => setPlanoSelecionado(e.target.value)}
              label="Escolha um plano"
            >
              {planos.map((p, i) => (
                <MenuItem key={i} value={p.promocao}>
                  {p.promocao}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button variant="outlined" onClick={handleEnviar} fullWidth sx={{ mb: 2 }} >
            Enviar
          </Button>
        </Box>
      )}

      {/* Passo 3: Mensagem negativa */}
      {tentouConsultar && !liberarFormulario && (
        <Box mt={4}>
          <Typography variant="h6" mb={2}>
            Se negativa
          </Typography>
          <Typography fontWeight={600} mb={1}>
            Que pena! Infelizmente não atendemos o seu endereço
          </Typography>
          <Typography>
            Assim que houver disponibilidade entraremos em contato.
          </Typography>
        </Box>
      )}
    </Container>
  );
}
