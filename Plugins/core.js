const fs = require("fs");
const axios = require("axios");
const path = require("path");
let mergedCommands = [
  "help",
  "h",
  "menu",
  "sc",
  "support",
  "supportgc",
  "script",
];

module.exports = {
  name: "others",
  alias: [...mergedCommands],
  uniquecommands: ["sc", "support"],
  description: "All miscleaneous commands",
  start: async (Atlas, m, { pushName, prefix, inputCMD, doReact }) => {
    let pic = fs.readFileSync("./Assets/Samuza.jpg");
    switch (inputCMD) {
      case "script":
      case "sc":
        await doReact("👲🏻");
        let repoInfo = await axios.get(
          "https://api.github.com/repos/FantoX001/Atlas-MD"
        );
        let repo = repoInfo.data;
        let txt = `            👲🏻 *Dark SamuZa's Script* 👲🏻\n\n*👲🏻 Total Forks:* _Count Erro!!!_
        }\n*⭐ Total Stars:* _Count Erro!!!_\n*📜 License:* Cyber SamuZa
        }\n*📁 Repo Size:* 120MB(
          2
        )} MB\n*📅 Last Updated:* ${repo.updated_at}\n\n*🔗 Repo Link:* \n https://github.com/
        \n\n❝ Dont forget to give a Star ⭐ to the repo. It's made with restless hardwork [ᴅᴇᴠᴇʟᴏᴘᴇʀ ʙʏ ᴍʀ ᴘᴀꜱɪɴᴅᴜ]. ❞\n\n©️ [ᴅᴇᴠᴇʟᴏᴘᴇʀ ʙʏ ᴍʀ ᴘᴀꜱɪɴᴅᴜ]`;
        Atlas.sendMessage(m.from, { image: pic, caption: txt }, { quoted: m });
        break;

      case "menu":
      case "help":
      case "list":
      case "cmd":
        await doReact("👲🏻");
        let txt2 = `
╭──────《🎭Ɗ𝖆𝖗𝒌 𝓢𝖆𝖒𝖚ɀ𝖆 𝓥4🎭》──────⊷
│
│ This Is : Dark SamuZa V4
│
│ Developer : Mr.Pasindu
│
│ Install Bot :
│
│ Github: https://github.com/CyberSamuZa
│
╰─────────────────────────────⊷

╭ ─┉《🎭Converter🎭》─── ╮
│👲🏻 ${prefix} toimg
│👲🏻 ${prefix} togif
│👲🏻 ${prefix} tomp4
│👲🏻 ${prefix} tomp3
│👲🏻 ${prefix} toaudio
│👲🏻 ${prefix} tourl
│👲🏻 ${prefix}  topdf
│👲🏻  ${prefix} imgtopdf
╰ ─┉──┉─¡! 💧 !¡─┉──┉─ ╯
                  
╭ ─┉《🎭 Core🎭》──── ╮
│👲🏻 ${prefix}  sc
│👲🏻 ${prefix}  support
╰ ─┉──┉─¡! 💧 !¡─┉──┉─ ╯

╭ ─《 🎭Downloader🎭》─ ╮
│👲🏻 ${prefix} igdl
│👲🏻 ${prefix}  fbdl
│👲🏻 ${prefix} mediafiredl
╰ ─┉──┉─¡! 💧 !¡─┉──┉─ ╯

╭ ──┉《 🎭Group🎭》─── ╮
│👲🏻 ${prefix} admins
│👲🏻 ${prefix} setgcname
│👲🏻 ${prefix} delete
│👲🏻 ${prefix} demote
│👲🏻 ${prefix} gclink
│👲🏻 ${prefix} antilink
│👲🏻 ${prefix} welcome
│👲🏻 ${prefix} group
│👲🏻 ${prefix} gc
│👲🏻 ${prefix} gcinfo
│👲🏻 ${prefix} tagall
│👲🏻 ${prefix} hidetag
│👲🏻 ${prefix} leave
│👲🏻 ${prefix} promote
│👲🏻 ${prefix} remove
│👲🏻 ${prefix} revoke
│👲🏻 ${prefix} setgcdesc
│👲🏻 ${prefix} setppgc
│👲🏻 ${prefix} chatbotgc
╰ ─┉──┉─¡! 💧 !¡─┉──┉─ ╯

╭ ──《 🎭Moderator🎭》── ╮
│👲🏻 ${prefix} addmod
│👲🏻 ${prefix} delmod
│👲🏻 ${prefix} mods
│👲🏻 ${prefix} ban
│👲🏻 ${prefix} unban
│👲🏻 ${prefix} banlist
│👲🏻 ${prefix} setchar
│👲🏻 ${prefix} pmchatbot
│👲🏻 ${prefix} bangroup
│👲🏻 ${prefix} unbangroup
│👲🏻 ${prefix} mode
╰ ─┉──┉─¡! 💧 !¡─┉──┉─ ╯

╭ ──《 🎭Pictures🎭》─── ╮               
│👲🏻 ${prefix} image
│👲🏻 ${prefix} couplepp
│👲🏻 ${prefix} gif
│👲🏻 ${prefix} pin
╰ ─┉──┉─¡! 💧 !¡─┉──┉─ ╯

╭ ─┉《 🎭Plugin🎭》──── ╮
│👲🏻 ${prefix} install
│👲🏻 ${prefix} uninstall
│👲🏻 ${prefix} plugins
│👲🏻 ${prefix} pluginlist
╰ ─┉──┉─¡! 💧 !¡─┉──┉─ ╯

╭ ──《🎭Reactions🎭》── ╮
│👲🏻 ${prefix} bite
│👲🏻 ${prefix} blush
│👲🏻 ${prefix} bonk
│👲🏻 ${prefix} bully
│👲🏻 ${prefix} cringe
│👲🏻 ${prefix} cry
│👲🏻 ${prefix} cuddle
│👲🏻 ${prefix} dance
│👲🏻 ${prefix} glomp
│👲🏻 ${prefix} handhold
│👲🏻 ${prefix} happy
│👲🏻 ${prefix} highfive
│👲🏻 ${prefix} ${prefix} hug
│👲🏻 ${prefix} kick
│👲🏻 ${prefix} kill
│👲🏻 ${prefix} kiss
│👲🏻 ${prefix} lick
│👲🏻 ${prefix} nom
│👲🏻 ${prefix} pat
│👲🏻 ${prefix} poke
│👲🏻 ${prefix} slap
│👲🏻 ${prefix} smile
│👲🏻 ${prefix} smug
│👲🏻 ${prefix} wave
│👲🏻 ${prefix} wink
│👲🏻 ${prefix} yeet
╰ ─┉──┉─¡! 💧 !¡─┉──┉─ ╯

╭ ───《🎭 Search🎭》──── ╮
│👲🏻 ${prefix} google
│👲🏻 ${prefix} lyrics
│👲🏻 ${prefix} yts
│👲🏻 ${prefix} ringtone
│👲🏻 ${prefix} stickersearch
│👲🏻 ${prefix} weather
│👲🏻 ${prefix} github
╰ ─┉──┉─¡! 💧 !¡─┉──┉─ ╯

╭ ──┉《🎭Sticker🎭》─── ╮
│👲🏻 ${prefix} sticker
│👲🏻 ${prefix} steal
│👲🏻 ${prefix} scrop
│👲🏻 ${prefix} smeme
│👲🏻 ${prefix} stickermeme
│👲🏻 ${prefix} q
│👲🏻 ${prefix} emojimix
╰ ─┉──┉─¡! 💧 !¡─┉──┉─ ╯

╭ ──《🎭Youtube-dl🎭》── ╮
│👲🏻 ${prefix} song
│👲🏻 ${prefix} video
│👲🏻 ${prefix} ytmp3
│👲🏻 ${prefix} ytmp4
╰ ─┉──┉─¡! 💧 !¡─┉──┉─ ╯

© [ᴅᴇᴠᴇʟᴏᴘᴇʀ ʙʏ ᴍʀ ᴘᴀꜱɪɴᴅᴜ]
`;
        Atlas.sendMessage(m.from, { image: pic, caption: txt2 }, { quoted: m });
        break;

      case "lp":
      case "hm":
      case "mu":
        await doReact("👲🏻");
        await Atlas.sendPresenceUpdate("composing", m.from);
        function readUniqueCommands(dirPath) {
          const allCommands = [];

          const files = fs.readdirSync(dirPath);

          for (const file of files) {
            const filePath = path.join(dirPath, file);
            const stat = fs.statSync(filePath);

            if (stat.isDirectory()) {
              const subCommands = readUniqueCommands(filePath);
              allCommands.push(...subCommands);
            } else if (stat.isFile() && file.endsWith(".js")) {
              const command = require(filePath);

              if (Array.isArray(command.uniquecommands)) {
                const subArray = [file, ...command.uniquecommands];
                allCommands.push(subArray);
              }
            }
          }

          return allCommands;
        }

        function formatCommands(allCommands) {
          let formatted = "";

          for (const [file, ...commands] of allCommands) {
            const capitalizedFile =
              file.replace(".js", "").charAt(0).toUpperCase() +
              file.replace(".js", "").slice(1);

            formatted += `╰ ─┉──┉─¡! • !¡─┉──┉─ ╯\n╭ ─┉──┉─¡! • !¡─┉──┉─ ╮\n👲🏻 *${capitalizedFile}*👲🏻\n╰ ─┉──┉─¡! • !¡─┉──┉─ ╯\n╭ ─┉──┉─¡! • !¡─┉──┉─ ╮\n\n`;
            //formatted += `\`\`\`${commands.join("\n")}\`\`\`\n\n\n`;
            // Adding a - before each command
            formatted += `\`\`\`${commands
            .map((cmd) => `│👲🏻 ${prefix + cmd}`)
            .join("\n")}\`\`\`\n\n\n`;
          }

          return formatted.trim();
        }

        const pluginsDir = path.join(process.cwd(), "Plugins");

        const allCommands = readUniqueCommands(pluginsDir);
        const formattedCommands = formatCommands(allCommands);
        var helpText = `\n*Dark SamuZa V4* \n Developer By Mr.Pasindu,\n\nI am *SamuZa*, this is dark samuza whatsapp user bot developer by mr.pasindu.\n\n*🔖 My Prefix is:*  ${prefix}\n\n${formattedCommands}\n\n\n ©  [ᴅᴇᴠᴇʟᴏᴘᴇʀ ʙʏ ᴍʀ ᴘᴀꜱɪɴᴅᴜ]`;
        await Atlas.sendMessage(
          m.from,
          { video: { url: botVideo }, gifPlayback: true, caption: helpText },
          { quoted: m }
        );

        break;
      default:
        break;
    }
  },
};
