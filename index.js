const express = require("express");
const telegraf = require("telegraf");
const app = exrpess();

// Enter your TOKEN in config.json
const bot = new Telegraf(config.token);

// Commands
bot.command('oldschool', (ctx) => ctx.reply('Hello'));
bot.command('modern', ({ reply }) => reply('Yo'));
bot.command('hipster', Telegraf.reply('λ'));
bot.use(Telegraf.log());

bot.launch();