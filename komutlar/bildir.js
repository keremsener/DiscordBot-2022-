module.exports = {
  name:"bildir",
  code:`
$djsEval[run: async (app, message, args) => {

        let guildID = '857613345652473867'
        let channelID = '879771939068080138'

        let reaportMessage = args.join(' ')
        if (!reaportMessage) return message.channel.send('Şikayetini belirt!')

        let reaportMessageEmbed = new MessageEmbed()
        .addField('Şikayet', reaportMessage)
        .addField('Kullanıcı', \`${message.author.tag} ID = ${message.author.id}\`)
        .addField('Sunucu', message.guild.name)
        .addField('Kullanıcının Şikayet Ettiği Sunucu Link', await message.channel.createInvite({ temporary: true }).then(i => i.url))
        .setColor('RED')
        .setFooter('Şikayet Sistemi')
        .setTimestamp()
        .setThumbnail(message.author.displayAvatarURL())
        .setAuthor(app.user.username, app.user.avatarURL())

        message.channel.send('Şikayetiniz başarılı bir şekilde gönderilmiştir. Tek Yapmanız Beklemek!')
        app.guilds.cache.get(guildID).channels.cache.get(channelID).send(reaportMessageEmbed)
    }
}
]
`
}