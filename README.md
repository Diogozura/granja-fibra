Claro! Aqui está um exemplo completo e profissional de `README.md` para o seu projeto:

---

```md
# 🌐 Granja Fibra - Site Institucional

Este é o site oficial da Granja Fibra, desenvolvido com **Next.js**, **TypeScript**, **Material UI** e **Framer Motion**, com painel CMS em **PHP** para gerenciar planos, ofertas e cobertura por CEP.

---

## 🚀 Tecnologias Utilizadas

- [Next.js](https://nextjs.org/) + TypeScript
- [Material UI (MUI)](https://mui.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Font Awesome](https://fontawesome.com/)
- [PHP + JSON (CMS via cPanel)]
- [cPanel / Hostinger]

---

## 📁 Estrutura do Projeto

```

├── public/
│   ├── imagens, ícones, favicons
│
├── src/
│   ├── components/     # Componentes reutilizáveis (Hero, Planos, etc.)
│   ├── app/            # Rotas Next.js (pages)
│   ├── data/           # Mock local (fallback)
│   └── lib/            # Temas, hooks, configurações
│
├── cms/                # CMS em PHP (Rodando no cPanel)
│   ├── index.php       # Painel administrativo
│   ├── planos.json
│   ├── ofertas.json
│   └── ceps.json
│
├── .env.local          # Variáveis de ambiente (se necessário)
├── next.config.js
└── README.md           # Este arquivo

````

---

## ✅ Funcionalidades

- 🔧 Painel CMS para editar:
  - Planos
  - Ofertas
  - CEPs autorizados
- 📦 Site 100% estático exportável (`next export`)
- 📱 Totalmente responsivo
- ⚡ Animações suaves com Framer Motion
- 🌙 Suporte a tema claro/escuro
- 🔍 Verificação de cobertura por CEP
- 📞 Contato via WhatsApp, Telefone ou E-mail

---

## 🛠️ Como rodar o projeto localmente

```bash
# 1. Instalar dependências
npm install

# 2. Rodar em ambiente de desenvolvimento
npm run dev

# 3. Gerar build para produção
npm run build

# 4. Exportar como site estático
npm run export
````

> O conteúdo será exportado para a pasta `/out`, pronto para envio ao cPanel.

---

## 🌐 Publicação no cPanel

1. Acesse o **Gerenciador de Arquivos** do cPanel.
2. Envie os arquivos da pasta `/out` para a pasta `public_html/`.
3. Crie uma pasta `cms/` dentro de `public_html/` e envie o CMS PHP.
4. Garanta que os arquivos `planos.json`, `ofertas.json` e `ceps.json` estejam com permissões de leitura/escrita.

---

## 🔐 Segurança

* Painel CMS protegido com login simples.
* Dados sensíveis são tratados com `htmlspecialchars()` no PHP.
* Evite deixar arquivos JSON públicos em produção.

---

## 📌 Observações

* As páginas `/planos`, `/promocoes`, `/contato`, `/faq`, etc., carregam dados dinamicamente a partir do CMS PHP (via fetch).
* A verificação de CEP ocorre antes da liberação do formulário de contato.
* Todas as imagens são otimizadas e carregadas com `next/image`.

---

## 📞 Suporte & Contato

Este projeto foi desenvolvido por [@diogozura](https://www.linkedin.com/in/diogozura/).
Para dúvidas ou melhorias, entre em contato via WhatsApp ou e-mail disponíveis no rodapé do site.

---

## 📄 Licença

Este projeto é **privado** e destinado exclusivamente ao uso da Granja Fibra.
Proibida a cópia ou redistribuição sem autorização.

```

