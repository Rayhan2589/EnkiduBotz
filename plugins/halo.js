let fs = require('fs')
let handler = async (m) => {
let stc = fs.readFileSync('./sticker/halo.webp')
conn.fakeReply(m.chat, stc, '0@s.whatsapp.net', '*ada apa?🐦*', 'status@broadcast')
}

handler.customPrefix = /^(hola|hallo|hay|oy)$/i
handler.command = new RegExp

module.exports = handler
