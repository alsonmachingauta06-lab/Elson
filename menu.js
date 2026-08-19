let handler = async (m, { conn }) => {
let menu = `
*ALSON XMD BOT*
*Owner:* ${global.ownerName}

*BOT COMMANDS*
.repo-show alsonmachingauta06-lab
.sc - Source code
.menu - Show this menu
.info - https://whatsapp.com/channel/0029Vb8pa9p5kg7CkpkxrR37

*Thanks for using Alson XMD*
`

await conn.reply(m.chat, menu, m)
}

handler.command = ['menu', 'help']
handler.help = ['menu']
handler.tags = ['main']

module.exports = handler
