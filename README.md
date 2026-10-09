# TWD Brasil Online — Vercel

Versão em Next.js da página aprovada, com as mesmas imagens, mapa interativo e regras.

## Publicar na Vercel

1. Extraia este ZIP.
2. Abra a pasta `TWD-Brasil-Online-Vercel` e envie o seu conteúdo para a raiz do repositório GitHub `twdbrasil`, substituindo os arquivos de mesmo nome. O arquivo `package.json` precisa ficar na raiz do repositório, sem uma pasta extra por cima.
3. Confirme o commit na branch `main`.
4. Na Vercel, selecione **Application Preset: Next.js**.
5. Mantenha **Root Directory: ./ **.
6. Em **Build and Output Settings**, deixe os padrões do Next.js. Se você já ativou overrides, use `pnpm build` como Build Command e `.next` como Output Directory. O Install Command é `pnpm install --frozen-lockfile`.
7. Esta primeira versão não exige variáveis de ambiente.
8. Clique em Deploy.

O `vercel.json` já declara o framework e os comandos necessários. Não use o antigo comando `node scripts/run-framework.mjs build`.

## Rodar no computador

Requer Node.js 22.13 ou superior e pnpm 11.25.0 (versão declarada pelo projeto).

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Para verificar o build de produção:

```sh
pnpm build
```

## Discord

O login real pelo Discord continua pendente de integração e configuração. O mapa e as regras funcionam sem login. Nenhuma credencial ou segredo foi incluído neste arquivo.

## Arquivos principais

- `app/page.tsx`: página e interações do mapa.
- `app/globals.css`: aparência.
- `app/layout.tsx`: estrutura e metadados.
- `public/assets`: imagens e mapas originais.

Esta é uma exportação para Vercel. A página já publicada em Sites permanece independente.
