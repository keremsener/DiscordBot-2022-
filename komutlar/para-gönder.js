module.exports = {
  name:"gönder",
  aliases: ["send"],
  code:`
  $setGlobalUserVar[para;$sub[$getGlobalUserVar[para;$authorID];$noMentionMessage[1]];$authorID]
  $setGlobalUserVar[para;$sum[$getGlobalUserVar[para;$mentioned[1]];$noMentionMessage[1]];$mentioned[1]]
  $channelSendMessage[$channelID;{color:BLUE}
  {author:Para Gönderme İşlemi Başarılı 💰:$authorAvatar}
  {thumbnail:https://www.ekonomist.com.tr/wp-content/uploads/2020/12/wsi-imageoptim-iStock-1063289558-1200x900.jpg}
  {description:Parayı Gönderen Kişi = \`$userTag[$authorID]\`
  Parayı Alan Kişi = \`$userTag[$mentioned[1]]\`
  
  Parayı Gönderen Kişinin Güncel Parası = \`$sub[$getGlobalUserVar[para;$authorID];$noMentionMessage[1]]\`
  Parayı Alan Kişinin Güncel Parası = \`$sum[$getGlobalUserVar[para;$mentioned[1]];$noMentionMessage[1]]\`
  
  Alınan Para Miktarı = \`$noMentionMessage[1]\`
  }{footer:Parayı İyi Cukkaladın $userTag[$mentioned[1]]:$userAvatar[$mentioned[1]]}
  ]
  $onlyIf[$getGlobalUserVar[para;$authorID]>=$noMentionMessage[1];{color:RED}{author:Attığın Miktarı Devlet Karşılamıcak Sende Ne kadar varsa o kadar miktar gir:$authorAvatar}]
  $onlyIf[$noMentionMessage[1]>0;{color:RED}{author:Seni Zeki Adam 0 ve Altı Değer Giremessin XD:$authorAvatar}]
  $onlyIf[$isNumber[$noMentionMessage[1]]!=false;{color:RED}{author:Sadece Sayı Gir Kankam !:$authorAvatar}]
  $onlyIf[$noMentionMessage[1]!=;{color:RED}{author:Para Göndermem İçin 1 ve üstü bir değer girermisin ?:$authorAvatar}]
  $onlyIf[$isBot[$mentioned[1]]!=true;{color:RED}{author:Etiketlediğin Kişi Bot Olmamalı !:$authorAvatar}]
  $onlyIf[$mentioned[1]!=$authorID;{color:RED}{author:Kendine Para Gönderemezsin !:$authorAvatar}]
  $onlyIf[$mentioned[1]!=;{color:RED}{author:Para Göndereceğin Kişiyi Etiketlermisin ?:$authorAvatar}]
  $onlyIf[$getGlobalUserVar[hesap;$authorID]!=yok;Hesap Olusturulmadı !]
  `
}