 const {
    generateWAMessageFromContent
} = (await import('@adiwajshing/baileys')).default

let handler  = async (m, { conn, usedPrefix: _p }) => {

  let arr = []
for (let i = 0; i < 404; i++) arr.push({ productId: '4380444045392529' }) 
let list = await( await generateWAMessageFromContent(m.chat, { listMessage: { title: 'ꜱɪᴍᴩʟᴇ ᴡʜᴀᴛꜱᴀᴩᴩ ʙᴏᴛ',  description: `- _*About me*_\n\n- Owner : Def\n- Age: 15/ 9th grade class\n - Github: Rlxfly\n\n thx.` , listType: 2, productListInfo: { productSections: [{ title: 'github: Rlxfly', products: arr }], headerImage: { productId: '4380444045392529', jpegThumbnail: thumb2 }, businessOwnerJid: '6281321776499@s.whatsapp.net' }, footerText: `© ${conn.getName('6281321776496@s.whatsapp.net')}` }}, { quoted: m }))
return await conn.relayMessage(m.chat, list, { waitForAck: true })
  
}

handler.command = /^(gw)$/i
export default handler