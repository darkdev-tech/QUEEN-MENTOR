const util = require('util');
const fs = require('fs-extra');
const { zokou } = require(__dirname + "/../framework/zokou");
const { format } = require(__dirname + "/../framework/mesfonctions");
const img = 'https://i.imgur.com/jE8eQsP.jpeg';
const os = require("os");
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)

zokou({ nomCom: "menu2", categorie: "General" }, async (dest, zk, commandeOptions) => {
    let { ms, repondre ,prefixe,nomAuteurMessage,mybotpic} = commandeOptions;
    let { cm } = require(__dirname + "/../framework//zokou");
    var coms = {};
    var mode = "public";
    
    if ((s.MODE).toLocaleLowerCase() != "yes") {
        mode = "private";
    }


    

    cm.map(async (com, index) => {
        if (!coms[com.categorie])
            coms[com.categorie] = [];
        coms[com.categorie].push(com.nomCom);
    });

    moment.tz.setDefault('Etc/GMT');

// Créer une date et une heure en GMT
const temps = moment().format('HH:mm:ss');
const date = moment().format('DD/MM/YYYY');

  let infoMsg =  `


┏━━ 🥳𝑫𝑨𝑹𝑴- 𝑴𝑫😈━━┓
┃   Dev: 𝑱𝑨𝒀𝑫𝑬𝑵
┃   User : ${s.OWNER_NAME}
┃
┣━🫣🤗𝙷𝚎𝚕𝚕𝚘 𝚖𝚢 𝚏𝚛𝚒𝚎𝚗𝚍 𝙸 𝚊𝚖 𝚑𝚊𝚙𝚙𝚢 𝚝𝚘 𝚜𝚎𝚎 𝚢𝚘𝚞 𝚊𝚐𝚊𝚒𝚗 ❣️❣️𒈒━➠
┗━━━𒈒❣️❣️❣️❣️❣️𒈒━━┛


┏━━━━━━━━━━━━━━┓
┣༆Alone md  
┣༆😊T𝚑𝚒𝚜 𝚒𝚜 𝚝𝚑𝚎 𝙼𝙴𝙽𝚄 𝚢𝚘𝚞 𝚊𝚛𝚎 𝚊𝚜𝚔𝚒𝚗𝚐 𝚏𝚘𝚛❣️
┗━━━━━━━━━━━━━━┛
    ▸ *date *: ${date}
    ▸ *prefix* : ${s.PREFIXE}
    ▸ *worktype* : ${mode} mode
    ▸ *plugin* : ${cm.length} 
    ▸ *rom* : ${format(os.totalmem() - os.freemem())}/${format(os.totalmem())}
    ▸ *running on* : ${os.platform()}
    ▸ *theme* : *𝑫𝑨𝑹𝑲*

> 𝐃𝐀𝐑𝐊 𝐌𝐃 2025\n${readmore}`;
    
let menuMsg = `

 * 𝐃𝐀𝐑𝐊 𝐌𝐃 𝐂𝐎𝐌𝐌𝐀𝐍𝐃𝐒 *${readmore}
`;

    for (const cat in coms) {
        menuMsg += ` ╭──────✣ *${cat}* ✣─────☹︎`;
        for (const cmd of coms[cat]) {
            menuMsg += `
│☢︎︎│ ${cmd}`;
        }
        menuMsg += `
╰────────────···▸▸ \n`
    }

    menuMsg += `> powered by 𝐃𝐀𝐑𝐊 𝐃𝐄𝐕 𝐓𝐄𝐂𝐇
`;

   var lien = mybotpic();

   if (lien.match(/\.(mp4|gif)$/i)) {
    try {
        zk.sendMessage(dest, { video: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *Boniphacemd*, déveloper Boniphace Tech" , gifPlayback : true }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
// Vérification pour .jpeg ou .png
else if (lien.match(/\.(jpeg|png|jpg)$/i)) {
    try {
        zk.sendMessage(dest, { image: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *Boniphacemd*, déveloper Fredie Tech" }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
else {
    
    repondre(infoMsg + menuMsg);
    
}

});
