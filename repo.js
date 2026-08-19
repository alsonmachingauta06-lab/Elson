let handler = async (m, { conn }) => {
conn.reply(m.chat, `*ALSON XMD BOT*\n\n*Repository:* https://github.com/alsonmachingauta06-lab/Elson\n\n*Owner:* ${global.ownerName}`, m)
}
handler.command = ['repo', 'sc', 'source']
handler.help = ['repo']
handler.tags = ['info']

module.exports = handler
