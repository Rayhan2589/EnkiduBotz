let fs = require('fs')
let handler = async (m) => {
let stc = fs.readFileSync('./sticker/jomblo.webp')
conn.fakeReply(m.chat, stc, '0@s.whatsapp.net', '*Kesian :v*', 'status@broadcast')
}

handler.customPrefix = /^(jomblo|hahaha|cie|aha)$/i
handler.command = new RegExp

module.exports = handler
