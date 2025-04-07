const util = require('util');
const fs = require('fs-extra');
const axios = require('axios');
const { zokou } = require(__dirname + "/../framework/zokou");
const os = require("os");
const moment = require("moment-timezone");
const conf = require(__dirname + "/../set");

const VideoUrl = "https://files.catbox.moe/xptjq3.mp4"; // New audio URL
const ThumbnailURL = "https://files.catbox.moe/533oqh.jpg"; // New image URL

moment.tz.setDefault(`${conf.TZ}`);

const getTimeAndDate = () => {
    return {
        time: moment().format('HH:mm:ss'),
        date: moment().format('DD/MM/YYYY')
    };
};

// Ping Command
zokou({ nomCom: "pi", categorie: "General" }, async (dest, zk, commandeOptions) => {
    let { ms } = commandeOptions;
    const { time, date } = getTimeAndDate();
    const ping = Math.floor(Math.random() * 100) + 1; // Generate a random ping between 1ms - 100ms

    try {
        await zk.sendMessage(dest, { 
            text:`❣️ *Pong:* ${ping}ms\n📅 *Date:* ${date}\n⏰ *Time:* ${time}`, 
            ptt: true, // Voice note form
            video: {URL:VideoUrl},
            contextInfo: {
                sourceUrl: conf.GURL,
                forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
              newsletterJid: '120363295141350550@newsletter',
              newsletterName: 'DARK MD🏌️‍♂️',
              serverMessageId: 143},
      externalAdReply: {
          title: "Enjoy...",
          body: "🕯️DARK-MD IS AT HIGH SPEED now",
          thumbnailUrl: "https://files.catbox.moe/v3vzdb.jpg",
          mediaType: 1,
            renderLargerThumbnail: false
        }
      }
    }, { quoted: ms });
    };
}
     catch (e) {
        console.log("❌ Ping Command Error: " + e);
        repondre("❌ Error: " + e);
    }
});
