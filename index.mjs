#!/usr/bin/env node

import { Command } from "commander";
import shell from "shelljs";
import chalk from "chalk";
import fs from "fs";
import path from "path";

const program = new Command();

program.version("1.0.0").description("CLI для создания Telegram-бота");

program
  .command("setup <projectName>")
  .description("Создать новый проект Telegram-бота")
  .action((projectName) => {
    const projectPath = path.join(process.cwd(), projectName);

    // Создание корневой папки
    if (!fs.existsSync(projectPath)) {
      fs.mkdirSync(projectPath, { recursive: true });
      console.log(chalk.green(`📁 Папка ${projectName} создана!`));
    } else {
      console.log(chalk.red(`⚠️ Папка ${projectName} уже существует!`));
      process.exit(1);
    }

    // Переход в папку проекта
    shell.cd(projectPath);

    // Инициализация npm-проекта
    console.log(chalk.blue("📦 Инициализация npm..."));
    shell.exec("npm init -y");

    // Установка зависимостей
    console.log(chalk.green("⬇️ Устанавливаем основные пакеты..."));
    shell.exec("npm install telegraf express dotenv axios");
    shell.exec("npm install pg prisma @prisma/client redis bullmq");

    console.log(chalk.green("⬇️ Устанавливаем dev-зависимости..."));
    shell.exec("npm install -D typescript ts-node nodemon @types/node @types/express");

    console.log(chalk.green("⬇️ Устанавливаем логирование..."));
    shell.exec("npm install winston express-winston pino");

    // Создание структуры папок и файлов
    const structure = {
      "src/bot/commands": ["start.ts", "help.ts", "order.ts"],
      "src/bot/middlewares": ["logger.ts", "auth.ts"],
      "src/bot/services": ["payment.ts", "crm.ts"],
      "src/bot": ["bot.ts"],
      "src/database": ["prisma.schema"],
      "src/database/migrations": [],
      "src/server": ["webhooks.ts", "expressApp.ts"],
      "src/utils": ["logger.ts", "config.ts"],
      "src": ["index.ts"],
    };

    Object.entries(structure).forEach(([folder, files]) => {
      const folderPath = path.join(projectPath, folder);
      fs.mkdirSync(folderPath, { recursive: true });
      console.log(chalk.yellow(`📂 Создана папка: ${folder}`));

      files.forEach((file) => {
        const filePath = path.join(folderPath, file);
        fs.writeFileSync(filePath, ""); // Создаём пустой файл
        console.log(chalk.cyan(`📄 Создан файл: ${file}`));
      });
    });

    // Создаём .env, tsconfig.json, README.md
    const otherFiles = ["package.json", ".env", "tsconfig.json", "README.md"];
    otherFiles.forEach((file) => {
      const filePath = path.join(projectPath, file);
      fs.writeFileSync(filePath, "");
      console.log(chalk.cyan(`📄 Создан файл: ${file}`));
    });

    console.log(chalk.blue("🎉 Проект Telegram-бота успешно создан! 🚀"));
  });

program.parse(process.argv);
