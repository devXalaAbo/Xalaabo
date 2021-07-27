const Discord = require('discord.js');
const fetch = require('node-fetch');
const { lineReply } = require("discord-reply");

module.exports = {
        name: "clyde",
        noalias: [''],
        category: "image",
        description: "Shows Embed Send By Clyde Bot",
        usage: "<text>",
        accessableby: "everyone",
    async execute(message, args, client) {

        let text = args.join(" ");

        if (!text) {
            return message.channel.send("**Enter Text**");
        }

        let m = await message.channel.send("**Please Wait...**");
        try {
            let res = await fetch(encodeURI(`https://nekobot.xyz/api/imagegen?type=clyde&text=${text}`));
            let json = await res.json();
            let attachment = new Discord.MessageAttachment(json.message, "clyde.png");
            message.lineReplyNoMention(attachment);
            m.delete({ timeout: 5000 });
        } catch (e) {
            m.edit(e.message);
        }
    }
}
