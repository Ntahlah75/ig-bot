require("dotenv").config();
const { Client } = require("@arashgh/insta-js");

const bot = new Client();

bot.once("connected", () => console.log(`Logged in as ${bot.user.username}`));
bot.on("followRequest", (user) => user.approveFollow());
bot.on("pendingRequest", (chat) => chat.approve());
bot.on("messageCreate", (message) => {
    message.markSeen();
    if (message.author.id === bot.user.id) return;

    if (message.content.toLowerCase() === "!ping") {
        const o = "o".repeat(Math.floor(Math.random() * 15));
        return message.reply(`p${o}ng!`);
    }
});

bot.login(process.env.IG_USERNAME, process.env.IG_PASSWORD);
