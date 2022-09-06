# depd.rocks

Dieses GitHub repository ist mit Cloudflare Pages verbunden

## Alternativer Deploy über Wrangler

Für die [Wrangler CLI](https://github.com/cloudflare/wrangler) von [Cloudflare](https://developers.cloudflare.com/workers/wrangler/) wird [NodeJS](https://nodejs.org/en/download/) benötigt

```bash
git clone git@github.com:flatheadv8/depd.rocks.git
cd depd.rocks
npm i

# development
npx wrangler pages dev src --live-reload

# deployment
npx wrangler pages publish src --project-name depd

```
