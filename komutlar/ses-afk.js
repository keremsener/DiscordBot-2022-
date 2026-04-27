module.exports = ({
    name: "ses-afk",
    code: `
$djsEval[message.member.voice.channel.join();
  const {MessageEmbed} = require('discord.js')
   const CANDY = new MessageEmbed() 
            .setDescription('Ses kanalına başarıyla giriş yapıldı')
            .setColor("RED")
            .setTimestamp()
            d.message.channel.send(CANDY) 
]
$onlyIf[$voiceID!=;Lütfen herhangi bir ses kanalına girin]
$onlyPerms[managechannels;{color:RED} {title:Yetkiniz Yetmiyor} {description:Bu komutu kullanabilmeniz için \`Kanalları Yönet\` Yetkisine sahip olun.}]
$onlyBotPerms[admin;{color:BLUE} {title:Yetkim Yetersiz} {description:Bu komutu çalıştırabilmem için \`Yönetici\` Yetkisine sahip olmam gerekli.}]
`
})
