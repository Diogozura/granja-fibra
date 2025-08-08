/* eslint-disable @typescript-eslint/no-explicit-any */
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
import { formatPhone } from '@/utils/formatPhone';

export default function VerificacaoEndereco() {
  const [cep, setCep] = useState('');
  const [numero, setNumero] = useState('');
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [mostrarForm, setMostrarForm] = useState(false);
  const [liberarPlano, setLiberarPlano] = useState(false);
  const [planos, setPlanos] = useState<{ promocao: string }[]>([]);
  const [planoSelecionado, setPlanoSelecionado] = useState('');
  const [utmSource, setUtmSource] = useState('organico');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const utm = params.get('utm_source');
    setUtmSource(utm || 'organico');
  }, []);

  useEffect(() => {
    fetch('https://qrcode.grajafibra.inf.br/sistema_avaliacoes/dados.php')
      .then(res => res.json())
      .then(data => {
        const planosComuns = data.planos || [];
        const ofertas = data.ofertas.promocoes || [];
        setPlanos([...planosComuns, ...ofertas]);
      })
      .catch(() => setPlanos([]));
  }, []);

  const handleConsultarCEP = () => {
    if (cep.replace(/\D/g, '').length !== 8) {
      setMensagem('❌ CEP inválido');
      return;
    }
    setMostrarForm(true); // exibe nome e telefone
    setMensagem(''); // limpa qualquer mensagem anterior
  };

  const handleValidarLead = async () => {
    if (!nome || !telefone) {
      setMensagem('⚠️ Preencha seu nome e telefone para continuar.');
      return;
    }

    try {
      const res = await fetch(`https://qrcode.grajafibra.inf.br/sistema_avaliacoes/consultaCep.php?cep=${cep}`);
      const data = await res.json();

      const payload = {
        nome,
        telefone,
        cep,
        numero,
        plano: planoSelecionado,
        utm_source: utmSource,
      };

      // sempre salva o lead, mesmo que não atenda

      await fetch('https://qrcode.grajafibra.inf.br/sistema_avaliacoes/salvarLead.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (data.autorizado) {
        setMensagem(`✅ Atendemos sua região: ${data.dados.cidade} - ${data.dados.estado}`);
        setLiberarPlano(true);
      } else {
        setMensagem('❌ Que pena! Infelizmente não atendemos o seu endereço . Assim que houver disponibilidade entraremos em contato.');
        setLiberarPlano(false);
      }
    } catch {
      setMensagem('Erro ao consultar o CEP');
    }
  };

  const [enviando, setEnviando] = useState(false);

  const normalizaTelefone = (t: string) => t.replace(/\D/g, ''); // só dígitos

  const handleEnviar = async () => {
    // validações básicas
    if (!nome.trim() || !telefone.trim() || !cep.trim()) {
      alert('Preencha nome, telefone e CEP.');
      return;
    }
    if (!planoSelecionado) {
      alert('Selecione um plano antes de enviar.');
      return;
    }

    setEnviando(true);
    try {
      const payload = {
        nome: nome.trim(),
        telefone: normalizaTelefone(telefone),
        cep,
        numero,
        plano: planoSelecionado,
        utm_source: utmSource || 'organico',
      };

      const res = await fetch('https://qrcode.grajafibra.inf.br/sistema_avaliacoes/salvarLead.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      // tenta JSON; se backend devolver texto simples, cai no catch do JSON e tratamos abaixo
      let data: any = {};
      try {
        data = await res.json();
      } catch {
        // fallback: se vier texto (ex: URL pura)
        const txt = await res.text();
        data = { sucesso: res.ok, redirect_url: txt?.startsWith('http') ? txt : undefined };
      }

      if (data?.sucesso && data?.redirect_url) {
        window.location.href = data.redirect_url;
        return;
      }

      // fallback extra: alguns backends retornam 200 com redirect_url mesmo sem flag
      if (data?.redirect_url) {
        window.location.href = data.redirect_url;
        return;
      }

      alert('Erro ao salvar. Tente novamente.');
    } catch (e) {
      console.error(e);
      alert('Falha na comunicação. Tente novamente.');
    } finally {
      setEnviando(false);
    }
  };


  return (
    <Container maxWidth="sm" sx={{ py: 6 }}>
      <Typography variant="h6" fontWeight={700} mb={2}>
        Digite seu CEP:
      </Typography>

      <Grid container spacing={2}>
        <Grid size={12}>
          <TextField
            label="CEP"
            fullWidth
            value={
              cep.length <= 5
                ? cep
                : `${cep.slice(0, 5)}-${cep.slice(5, 8)}`
            }
            onChange={(e) => {
              const apenasNumeros = e.target.value.replace(/\D/g, '');
              if (apenasNumeros.length <= 8) {
                setCep(apenasNumeros);
              }
            }}
            inputProps={{ maxLength: 9 }}
          />
        </Grid>
        <Grid size={12}>
          <Button fullWidth variant="contained" onClick={handleConsultarCEP}>
            Consultar CEP
          </Button>
        </Grid>
      </Grid>

      {/* Após clicar em "Consultar CEP", exibe Nome e Telefone */}
      {mostrarForm && (
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
          <Button variant="contained" fullWidth onClick={handleValidarLead}>
            Verificar disponibilidade
          </Button>
        </Box>
      )}

      {/* Mensagem de status */}
      {mensagem && (
        <Typography mt={3} fontWeight={600}>
          {mensagem}
        </Typography>
      )}

      {/* Se autorizado, mostra o select de plano */}
      {liberarPlano && (
        <Box mt={4}>
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
          <Button variant="outlined" onClick={handleEnviar} fullWidth sx={{ mb: 2 }}>
           {enviando ? 'Enviando...' : 'Enviar'}
          </Button>
        </Box>
      )}
    </Container>
  );
}
