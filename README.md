# CLI-script
CLI-script. Project for auto-setting tg-bot

Command for setup your tg-bot via CLI-script
`
node ~/Desktop/cli/index.mjs setup project-name
`
this command creates followind folder structure
`
telegram-bot/
│── src/
│   ├── bot/
│   │   ├── commands/
│   │   │   ├── start.ts
│   │   │   ├── help.ts
│   │   │   ├── order.ts
│   │   ├── middlewares/
│   │   │   ├── logger.ts
│   │   │   ├── auth.ts
│   │   ├── services/
│   │   │   ├── payment.ts
│   │   │   ├── crm.ts
│   │   ├── bot.ts
│   ├── database/
│   │   ├── prisma.schema
│   │   ├── migrations/
│   ├── server/
│   │   ├── webhooks.ts
│   │   ├── expressApp.ts
│   ├── utils/
│   │   ├── logger.ts
│   │   ├── config.ts
│   ├── index.ts
│── .env
│── package.json
│── tsconfig.json
│── README.md

`
