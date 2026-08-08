# Biblioteca pessoal de fotografias

Endereço de produção: `https://acervo.chapada.ia.br`.

## Segurança

A rota é protegida por autenticação HTTP Basic. Antes de publicar, cadastre no painel do aplicativo Node.js da Hostinger:

- `ACERVO_ADMIN_USER`
- `ACERVO_ADMIN_PASSWORD`

Use uma senha longa e exclusiva. Esses valores não devem entrar no repositório.

## DNS e domínio

No hPanel, adicione `acervo.chapada.ia.br` como domínio adicional do mesmo aplicativo Node.js que atende `riodacasca.chapada.ia.br`. Caso o DNS seja administrado fora da Hostinger, crie o registro solicitado pelo hPanel para esse subdomínio. Ele deve apontar para a mesma aplicação; não exige outro repositório ou outra instalação.

O proxy da aplicação abre a biblioteca privada diretamente na raiz do subdomínio. O caminho `/acervo-pessoal` continua protegido e não é exibido na navegação pública.

## Dados do catálogo

A primeira versão salva cada ficha no navegador usado para catalogar. Ao terminar uma sessão, use **Baixar cópia JSON**. A evolução recomendada é conectar uma base permanente antes de catalogar um volume grande ou trabalhar em mais de um computador.
