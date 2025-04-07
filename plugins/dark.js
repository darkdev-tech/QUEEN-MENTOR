const util = require('util');

const fs = require('fs-extra');

const { zokou } = require(__dirname + "/../framework/zokou");

const { format } = require(__dirname + "/../framework/mesfonctions");

const os = require("os");

const moment = require("moment-timezone");

const s = require(__dirname + "/../set");



zokou({ nomCom: "Topu", categorie: "Menu" }, async (dest, zk, commandeOptions) => {

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



    moment.tz.setDefault(s.TZ);



// Créer une date et une heure en GMT

const temps = moment().format('HH:mm:ss');

const date = moment().format('DD/MM/YYYY');



  let infoMsg =  `

┏❏ ⌜ᴅᴀʀᴋ-ᴍᴅ ⌟ ❐
┃ ⿻𝑴𝑶𝑫𝑬: ${mode}
┃ ⿻𝑼𝑺𝑬𝑹 : ${s.OWNER_NAME}
┃ ⿻𝑳𝑰𝑩𝑳𝑨𝑹𝒀 : Baileys
️┃ ⿻𝑷𝑹𝑬𝑭𝑰𝑿 : ${s.PREFIXE}
️┃ ⿻𝑫𝑨𝑻𝑬 : ${date}
┃ ⿻𝑻𝑰𝑴𝑬 : ${temps}
┃ ⿻𝑻𝑶𝑶𝑳𝑺 : ${cm.length}
┃ ⿻𝑹𝑨𝑴: ${format(os.totalmem() - os.freemem())}/${format(os.totalmem())}
┃ ⿻𝑯𝑶𝑺𝑻 : ${os.platform()}
┗❏\n\n`;


    

let menuMsg = `
┏━━━━━━━━━┓
┣💫 𝑫𝑨𝑹𝑲 𝑴𝑫 𝑪𝑶𝑴𝑴𝑨𝑵𝑫𝑺
┗━━━━━━━━━┛\n


`;



    for (const cat in coms) {

        menuMsg += `┏❏ *${cat}*`;

        for (const cmd of coms[cat]) {

            menuMsg += `
┃ 𓇽 ${cmd}`;

        }

        menuMsg += `
┗❏\n`

    }



    menuMsg += `


︎┏━━━━━━━━━━━━━━┓
️┣❏𝑫𝑨𝑹𝑲 𝑴𝑫
┣❏𝑬𝑨𝑺𝒀 𝑳𝑰𝑭𝑬 
┗┳━━━━━━━━━━━━┳┛
┏┻━━━━━━━━━━━━┻┓
┃𝑷𝑶𝑾𝑬𝑹𝑬𝑫 𝑩𝒀 𝑫𝑨𝑹𝑲𝑻𝑬𝑪𝑯©
┗━━━━━━━━━━━━━━┛\n


`;



   var lien = mybotpic();



   if (lien.match(/\.(mp4|gif)$/i)) {

    try {

        zk.sendMessage(dest, { video: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *TKM-BOT*, déveloper Cod3uchiha" , gifPlayback : true }, { quoted: ms });

    }

    catch (e) {

        console.log("🥵🥵 Menu error " + e);

        repondre("🥵🥵 Menu error " + e);

    }

} 

// Vérification pour .jpeg ou .png

else if (lien.match(/\.(jpeg|png|jpg)$/i)) {

    try {

        zk.sendMessage(dest, { image: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *TKM-bot*, déveloper cod3uchiha" }, { quoted: ms });

    }

    catch (e) {

        console.log("🥵🥵 Menu error " + e);

        repondre("🥵🥵 Menu error " + e);

    }

} 

else {

    

    repondre(infoMsg + menuMsg);

    

}



});
