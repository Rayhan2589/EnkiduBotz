let fs = require('fs')
let handler = async (m) => {
let stc = fs.readFileSync('./sticker/awokawok.webp')
conn.fakeReply(m.chat, stc, '0@s.whatsapp.net', '*EWE EWE*', 'status@broadcast')
}

handler.customPrefix = /^(miku|nino|nakano|ewe)$/i
handler.command = new RegExp

module.exports = handler
