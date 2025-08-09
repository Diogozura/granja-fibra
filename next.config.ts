import type { NextConfig } from "next";

// Se publicar em subpasta (ex.: /site), defina NEXT_PUBLIC_BASE_PATH="/site" no .env

const nextConfig: NextConfig = {
  // Gera HTML/CSS/JS estático em /out
  output: "export",

  // Ajuda servidores estáticos (gera .../index.html)
  trailingSlash: true,

  // Suporte a publicação em subpasta (se usar)
  
  // Necessário para export estático com <Image>
  images: {
    unoptimized: true,
  },

  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: "", // <<< disponibiliza no client
  },
  experimental: {
    // tree-shaking fino nas libs
    optimizePackageImports: [
      "@mui/material",
      "@mui/icons-material",
      "date-fns",
      "lodash",
    ],
  },
};

export default nextConfig;
