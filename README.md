# Rio da Casca Oficial

Portal editorial e comunitário dedicado à história, ao território e às pessoas do Rio da Casca, em Chapada dos Guimarães, Mato Grosso.

O mesmo repositório também contém o portal **Músicas de DJ Dalma**, publicado em `musicas.chapada.ia.br`, com a composição “Valentim há de Voltar” e seus materiais de divulgação.

## Desenvolvimento

Requer Node.js 22.13 ou superior.

```bash
npm install
npm run dev
```

## Validação

```bash
npm run build
```

## Implantação na Hostinger

O projeto será conectado ao GitHub pelo recurso **Node.js Web App** da Hostinger.

- Repositório: `djmascarenhas/riodacasca-oficial`
- Branch de produção: `main`
- Gerenciador: `npm`
- Node.js: `22`
- Framework: `Next.js`
- Build: `npm run build` (gera `.next`)
- Inicialização: `npm run start`
- Endereço final: `https://riodacasca.chapada.ia.br`

No hPanel, selecione **Websites → Add website → Node.js Web App → Import Git Repository**. Conecte o repositório e confirme os comandos acima.

Depois da primeira implantação, conecte o domínio personalizado `riodacasca.chapada.ia.br`. Caso a zona DNS de `chapada.ia.br` esteja fora da Hostinger, crie no provedor de DNS o registro solicitado pelo hPanel.

O subdomínio `musicas.chapada.ia.br` deve apontar para a mesma aplicação. O arquivo `proxy.ts` identifica esse domínio e apresenta o portal musical na raiz, mantendo também as páginas acessíveis em `/musicas` pelo endereço principal.

Rotas do portal musical:

- `https://musicas.chapada.ia.br/`
- `https://musicas.chapada.ia.br/valentim-ha-de-voltar`
- `https://riodacasca.chapada.ia.br/musicas`

Não adicione senhas, tokens ou arquivos `.env` ao repositório. Variáveis de produção devem ser cadastradas diretamente na Hostinger.
