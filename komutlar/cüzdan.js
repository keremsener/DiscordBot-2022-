module.exports = {
  name:"cüzdan",
  aliases:['cash'],
  code:`
  $description[
    $thumbnail[$userAvatar[$mentioned[1;yes]]]
    $username[$mentioned[1;yes]]#$discriminator[$mentioned[1;yes]] Kişide
    Bulunan Toplam Şanışer Coin \`\`\`$getGlobalUserVar[para;$mentioned[1;yes]]\`\`\`
  ]
  $onlyIf[$getGlobalUserVar[hesap;$authorID]!=yok;Hesap Olusturulmadı !]
  $footer[Sorgulayan • $username;$authorAvatar]
  $color[BLUE]
  `
}