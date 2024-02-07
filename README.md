# Bot para facilitar resposta da AL da Metropole

## Configuração:

Basta modificar o arquivo `config.json` com as informações do server e iniciar o bot

#### client_id - ID do bot
#### token - Token de segurança do bot
#### channel_id: ID do canal que a mensagem será enviada
#### role_id: ID da tag de aprovado para atribuir ao usuário
#### guild_id: ID do canal que mensagem de resposta deve ser enviada
#### approve_message: Mensagem de aprovação, adicione {USER} para mencionar o usuário.
Exemplo: "Parabens {USER}, você foi aprovado pela embaixada!  :airplane:"
#### deny_message: Mensagem de reprovação, adicione {USER} para mencionar o usuário.
Exemplo: "{USER}, infelizmente você não foi aprovado pela nossa embaixada  :cry:"

### para iniciar o bot basta rodar:
```bash
npm run start
```
ou
```bash
yarn start
```

## Comandos

![comandos](https://github.com/kleberfh/embaixada-bot/assets/27457478/6ddb9016-a8f9-49f6-9add-995a48c16050)

```bash
/aprovar ID_USUARIO -> Aprova o usuário atribuindo a tag de aprovado e enviando a mensagem de aprovação
/recusar ID_USUARIO -> Reprova o usuário enviando a mensagem de reprovação
```

## Demo

https://github.com/kleberfh/embaixada-bot/assets/27457478/fc3834af-9d05-4334-b5c7-37c9468d59b7

