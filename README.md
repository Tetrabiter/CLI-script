# CLI-script
CLI-script. Project for auto-setting tg-bot

Command for setup your tg-bot via CLI-script
`
node ~/Desktop/cli/index.mjs setup project-name
`
this command creates followind folder structure

![image](https://github.com/user-attachments/assets/1f835202-ac2c-495e-992a-c84000c558fb)

```
bot/ – логика бота.
commands/ – команды /start, /help, /order.
middlewares/ – авторизация, логирование.
services/ – API-интеграции (платежи, CRM).
database/ – Prisma ORM, миграции БД.
server/ – Express-сервер для Webhooks.
utils/ – вспомогательные функции (логирование, конфиг).
```
