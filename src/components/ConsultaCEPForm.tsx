'use client';
import { useState } from 'react';

export default function ConsultaCEPForm() {
  const [cep, setCep] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [status, setStatus] = useState<'ok' | 'erro' | ''>('');

  const verificarCEP = async () => {
    if (cep.length < 8) return setMensagem('Digite um CEP válido');

    try {
      const res = await fetch(`/api/check-cep?cep=${cep}`);
      const data = await res.json();

      setStatus(data.ok ? 'ok' : 'erro');
      setMensagem(data.message);
    } catch (err) {
      setMensagem('Erro na consulta');
      setStatus('erro');
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: '2rem auto', padding: 20, background: '#fff', borderRadius: 8 }}>
      <h3>Consultar cobertura por CEP</h3>
      <input
        type="text"
        placeholder="Digite o CEP"
        value={cep}
        onChange={(e) => setCep(e.target.value.replace(/\D/g, ''))}
        style={{ padding: 10, width: '100%', marginBottom: 10 }}
      />
      <button onClick={verificarCEP} style={{ padding: 10, width: '100%' }}>
        Verificar
      </button>
      {mensagem && (
        <p style={{ color: status === 'ok' ? 'green' : 'red', marginTop: 10 }}>
          {mensagem}
        </p>
      )}
    </div>
  );
}
