let fs = require('fs')
let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
let name = m.fromMe ? conn.user : conn.contacts[m.sender]
let rozi = 'https://telegra.ph/file/4e35df492cded5e9e4866.jpg'
await conn.send3ButtonImg(m.chat, rozi, "*Ada Apa Tag owner Gua Ngab?🤨*", '=====『 TAG TERDETEKSI 』=====', 'OWNER', '.owner', 'KEMBALI', '.menu', 'STORE', '.store', m)
                        
}
handler.customPrefix = /@6289524208209/i
handler.command = new RegExp

module.exports = handler
