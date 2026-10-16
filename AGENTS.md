# AGENTS.md - LP Connect

Landing page do Reportei Connect, com página de documentação e formulário de teste gratuito.

- **Stack:** Next.js com `output: 'export'` (site estático gerado em `out/`)
- **Hospedagem:** Cloudflare Worker `lp-connect` com static assets, conta Reportei
- **URL:** https://lp.connect.reportei.com
- **Ambiente:** roda **direto no host**, sem Docker (mesma exceção do `billing-admin`)

---

## Deploy

O deploy sobe o conteúdo de `out/` para o Worker `lp-connect` via Wrangler. A configuração está em `wrangler.toml` (nome do Worker, conta e pasta de assets) e o comando em `package.json` (script `deploy`).

### Automático (padrão)

Todo merge na `main` dispara o workflow `.github/workflows/deploy.yml`, que roda `npm ci`, `npm run build` e `wrangler deploy`. Não é preciso fazer nada depois do merge: acompanhar em **Actions → Deploy** no GitHub. Para subir de novo sem merge novo, usar **Run workflow** na mesma tela.

O workflow usa o segredo `CLOUDFLARE_API_TOKEN` do repositório (token do Cloudflare com permissões *Workers Scripts: Edit* e *Account Settings: Read* na conta do `wrangler.toml`). A versão do Wrangler é a fixada no `package.json`.

O `.npmrc` liga `legacy-peer-deps`: o Next 14 declara peer `react@^18` e o projeto usa React 19. Sem ele o `npm ci` recusa a instalação.

### Manual (só se o workflow estiver fora do ar)

#### Pré-requisito (uma vez por máquina)

Wrangler autenticado com os escopos abaixo. Conferir com `npx wrangler whoami`; se faltar escopo ou não estiver logado, pedir ao usuário para rodar:

```bash
npx wrangler logout && npx wrangler login --scopes account:read user:read workers:write workers_scripts:write workers_routes:write pages:write offline_access
```

#### Procedimento

Sempre nesta ordem, sem pular etapas:

1. **Ir para a `main`:**
   ```bash
   git checkout main
   ```
2. **Garantir que não há nada modificado nem staged.** `git status --porcelain` deve retornar vazio. Se retornar algo, **parar** e avisar o usuário: não fazer stash, commit ou descarte por conta própria.
3. **Atualizar com o remoto:**
   ```bash
   git pull --ff-only
   ```
4. **Fazer o deploy:**
   ```bash
   npm run deploy
   ```
   O script roda `next build` e depois `wrangler deploy`.
5. **Confirmar:** a saída do Wrangler deve terminar com `Deployed lp-connect` e a URL do Worker. Reportar ao usuário o resultado, incluindo a quantidade de arquivos enviados.

#### Se o build falhar

- Erro em rota de metadata (`robots.txt`, `sitemap.xml`) com `output: export`: o arquivo em `app/` precisa de `export const dynamic = "force-static"`.
- Qualquer outro erro de build: reportar ao usuário, não publicar.

### O que NÃO fazer

- Não rodar `wrangler deploy` fora da `main` ou com working tree sujo.
- Não alterar `name` ou `account_id` no `wrangler.toml`: isso criaria um Worker novo em vez de atualizar o existente.
- Não usar `wrangler pages deploy`: o projeto é Worker, não Cloudflare Pages.
