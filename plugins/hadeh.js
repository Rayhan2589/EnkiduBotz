let fs = require('fs')
let handler = async (m) => {
let stc = fs.readFileSync('./sticker/hadeh.webp')
conn.fakeReply(m.chat, stc, '0@s.whatsapp.net', 'y', 'status@broadcast')
}

handler.customPrefix = /^(han|ray|wkwk|woy)$/i
handler.command = new RegExp

module.exports = handler
