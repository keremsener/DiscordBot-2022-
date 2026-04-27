const Aoi = require(`aoi.js`);
const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req, res) => res.send('Bot 7/24 Hazır!'));
app.listen(port, () => console.log("Hazırım Başkanım!")); 
const bot = new Aoi.Bot({
  token: process.env.token,
  prefix: ["$getServerVar[prefix]"],
  fetchInvites: true
});
bot.loadCommands(`./komutlar/`)
bot.onMessage();

bot.variables({
  prefix: "ş!",
  saas: "açık",
  şarkı: "",
  afk: "açık",
  afksebep: "",
  afkisim:"açık",
  hex:"hayır",
  kayıt:"kapalı",
  vrol:"",
  arol:"",
  kkanal:"",
  kkanal:"yok",
  kgörevli:"",
  ktag:"",
  hgkanal:"",
  bbkanal:"",
  erkek:"kapalı",
  kız:"kapalı",
  chat:"",
 mutelirol:"yok",
  otorollog:"",
  otorol:"",
  sendkanal:"",
  afkk:"",
  para:"0",
  hesap:"yok",
  cekilis:"undefined",
   tester:"Ayarlanmadı",
  onayredlog:"Ayarlanmadı",
  botlog:"Ayarlanmadı",
  başkanal:"Ayarlanmadı",
  gelenbotlar:"Ayarlanmadı",
  sahibi:"",
    botoy:"0",
  book:"",
  boor:"",
  afkneden:"",
  modlog:"",
  kid:"boş",
  eid:"boş",
  rid:"boş",
  mid:"boş",
karakter1:"açık",
karakter2:"açık",
ulke:"açık",
ulkem:"açık",
etiket:"açık",
itiraf:"açık",
ikanal:"açık",
puan:"açık",
ssmesaj:"açık"

});

bot.command({
  name: "eval",
  code: `$eval[$message]
$onlyForIDs[795630200380850196; Geliştiricim değilsin]`
});
bot.status({
  text: "KUMAR SİSTEMİ GELİŞTİRİLDİ!",
  type: "LISTENING",
  status: "listening,",
  time: 12
});
bot.status({
  text: "ş!yardım",
  type: "LISTENING",
  status: "listening",
  time: 12
});

bot.command({
  name: "saas-aç",
  code: `
  Selamun Aleyküm Dendiğinde Cevap Vereceğim!
  $resetServerVar[saas]
  $onlyIf[$getServerVar[saas]!=açık;Bu Özellik Zaten Açık!]
  
  `
});
bot.command({
  name: "saas-kapat",
  code: `
  Selamun Aleyküm Dendiğinde Cevap Vermiyorum Artık.
  $setServerVar[saas;kapalı]
  $onlyPerms[admin;Yetkin Bulunmamaktadır]
  $onlyIf[$getServerVar[saas]!=kapalı;Bu Özellik Zaten Kapalı!]
  
  `
});
bot.command({
  name: "sa",
  code: `
  Aleyküm Selam <@$authorID> Hoşgeldin !
    $onlyIf[$getServerVar[saas]!=kapalı;]
    $onlyIF[$message==;]
  `,
  nonPrefixed: true
});
bot.command({
  name: "sa",
  code: `
 $reply[$messageID; {title:HATIRLATMA!}
{description: [Şanışer Dinleyenlerin Bir Arada olduğu Resmi Sunucumuza Katılmayı Unutma!](https://discord.gg/WW74VVD9N9) }
{footer:Bu Hatırlatma Sadece Günde 1 Kez Yapılır.}
{color:BLUE};yes]
$serverCooldown[1d;]


    $onlyIf[$getServerVar[saas]!=kapalı;]
    $onlyIF[$message==;]
  `, nonPrefixed: true
});
bot.command({
  name: "selam",
  code: `
  Selam <@$authorID> Hoşgeldin !
    $onlyIf[$getServerVar[saas]!=kapalı;]
    $onlyIF[$message==;]
  `,
  nonPrefixed: true
});


bot.command({
  name: "yazdır",
  code: `
$deletecommand
$deleteWebhook[$splitText[1];$splitText[2]]
$sendWebhook[$splitText[1];$splitText[2];$noMentionMessage]
$textSplit[$createWebhook[$channelID;$username[$mentioned[1;yes]];$userAvatar[$mentioned[1;yes]];yes];/]
  $cooldown[3s;Biraz Bekle !]
  $onlyIf[$checkContains[$toLowerCase[$message];@everyone;@here;https://;www.;.com;discord.gg]!=true; Eğlence Komudunu Bile Boş Kullanıyorsunuz]

  `
});
bot.command({
  name: "balık-tut",
  code:` $title[Balık Tuttun]
$description[$username, $randomText[ 🐟;Ahtapot 🐙;Timsah 🐊;Balon Balıgı🐡;Tropik Balık 🐠] Yakaladın.]
$color[RED]
`
});
bot.command({
  name:"<@!854051178426269787>",
  code:`
  $title[EFENDİM!]
  $description[**prefixim "ş!" 
  yardım menüsünü görmek için "ş!yardım" yaz!**]
  $color[BLUE]
   
   
  
  `,
   nonPrefixed: true
   
})
bot.command({
  name: "avatar",
  code: `
  $author[$username[$mentioned[1;yes]] Kişisinin Avatarı;$userAvatar[$mentioned[1;yes]]]
  $image[$userAvatar[$mentioned[1;yes]]?size=2048]
  $footer[İsteyen Kişi $username;$authorAvatar]
  `
});
bot.command({
  name:"trump",
  code:`
$title[DONALD TRUMP]
$author[$username Yaptı]
$image[https://api.no-api-key.com/api/v2/trump?message=$replaceText[$message;%20;+;-1]]
  `
})
bot.command({
  name:"impostor",
  code:`
$image[https://vacefron.nl/api/ejected?name=$replaceText[$username[$mentioned[1;yes]]; ;+;-1]&imposter=true&crewmate=$randomText[red;blue;green;pink;purple;white;yellow]]
  
  
  `
})
bot.command({
    name: 'kayıt-reset',
    code: `
  $color[RED]
  $title[Başarılı]
  $description[
  Kayıt Sistemi Resetlenmiştir !]
  $resetServerVar[arol]
  $resetServerVar[vrol]
  $resetServerVar[kayıt]
  $resetServerVar[kkanal]
  $resetServerVar[kgörevli]
  $resetServerVar[ktag]
  $onlyPerms[admin;{description:Bunun İçin Yetkin Yok}{color:RED}]
  $footer[Kayıt Sistemini Tekrar Kurmak İçin ş!kyardım Yazın]
  $addTimestamp
 `
});
bot.command({
    name: 'kayıt-yetkili',
    code: `
  $color[BLUE]
$title[Başarılı]
$description[
 Kayıt Yetkilisi Rolü \`\`\`$roleName[$mentionedRoles[1]]\`\`\` Olarak Ayarlandı !]
  $suppressErrors[Etiketledigin Rolu Kontrol Et !]
  $setServerVar[kgörevli;$mentionedRoles[1]]
  $onlyIf[$message[1]!=;{description:Bir Rol Etiketle !}{color:RED}{title:HATA}]
    $onlyPerms[admin;{description:Bunun İçin Yetkin Yok}{color:RED}]

   `
});
bot.command({
    name: 'kayıt-kanal',
    code: `
  $color[BLUE]
  $title[Başarılı]
$description[Artık Sadece $channelName[$mentionedChannels[1]] Kanalında Kullanılabilecek !]
$setServerVar[kkanal;$mentionedChannels[1]]
$onlyIf[$message!=;{description:Bir Kanal Etiketlemelisin !}{color:RED}{title:HATA}]
  $onlyPerms[admin;{description:Bunun İçin Yetkin Yok}{color:RED}]
`
});
bot.joinCommand({
    channel: '$getServerVar[kkanal]',
    code: `
  $color[BLUE]
  <@$authorID> <@&$getServerVar[kgörevli]>

$author[Bir Şanışer Hayranı Belirdi, 👋;$serverIcon]

$description[$thumbnail[$userAvatar[$authorID]]
<a:roonsevimli:852909206629646339> **Sunucumuza Hoş Geldin! **<@$authorID>

<a:serloading:863086966257352767> **Seninle Birlikte $membersCount kişiyiz**

<a:gelopem:853206082935062529> **Kayıt için yetkilileri beklemen yeterlidir.**

<a:serdiscord:863086796443615283> **Hesap Kuruluş Tarihi : $creationDate[$authorID] **
$addTimestamp
$footer[Şanışer Kayıt Sistemi;https://images-ext-2.discordapp.net/external/N6T62hmVGvHnUbV9AXKtOhG6Mc1BSeRkE4Ycmy7tJyA/%3Fv%3D1/https/cdn.discordapp.com/emojis/863087654479462400.png]`
});

bot.command({
    name: 'kayıt-erkek',
    code: `
  $color[BLUE]
  $title[Başarılı Kayıt <a:seronay:852911320184913930>]
  $description[
  
   Üye : <@$mentioned[1]>

   Yeni İsim : \`$getServerVar[ktag] $message[2]\`
  
   Verilen Rol : <@&$getServerVar[vrol]>
  
  Kayıt Eden Yetkili : <@$authorID>
  
  ]
   
 $takeRoles[$mentioned[1];$getServerVar[arol]]
     $giveRoles[$mentioned[1];$getServerVar[vrol]]

 
$changeNickname[$mentioned[1]; $getServerVar[ktag]$message[2]]
$onlyIf[$message[2]!=;{description:Kullanım ş!kayıt-erkek @kişi İsim}{title:HATA}{color:RED}]
  $onlyForChannels[$getServerVar[kkanal];{description:Üzgünüm Burası Kayıt Kanalı Değil ! Burada Açman Lazım <#$getServerVar[kkanal]>}{color:RED}{title:HATA}]
  $onlyIf[$getServerVar[kayıt]!=kapalı;{description:Alınacak Rol Ve Verilecek Rol Ayarlanmamış !}{title:HATA}{color:RED}]
  $onlyIf[$hasRoles[$authorID;$getServerVar[kgörevli]]!=false;{description:Üzgünüm Bunu Sadece <@&$getServerVar[kgörevli]> Rolüne Kişileri Kullanabilir !}{title:HATA}{color:RED}]
  $footer[Şanışer Kayıt Sistemi]
  $addTimestamp 
`
});

bot.command({
    name: 'kayıt-kız',
    code: `
  $color[PURPLE]
  $title[Başarılı Kayıt <a:seronay:852911320184913930>]
  $description[
  
   Üye : <@$mentioned[1]>

   Yeni İsim : \`$getServerVar[ktag] $message[2]\`
  
   Verilen Rol : <@&$getServerVar[vrol]>
  
  Kayıt Eden Yetkili : <@$authorID>
  
  ]
   
 $takeRoles[$mentioned[1];$getServerVar[arol]]
     $giveRoles[$mentioned[1];$getServerVar[vrol]]

 
$changeNickname[$mentioned[1]; $getServerVar[ktag]$message[2]]
$onlyIf[$message[2]!=;{description:Kullanım ş!kayıt @kişi İsim Yaş}{title:HATA}{color:RED}]
  $onlyForChannels[$getServerVar[kkanal];{description:Üzgünüm Burası Kayıt Kanalı Değil ! Burada Açman Lazım <#$getServerVar[kkanal]>}{color:RED}{title:HATA}]
  $onlyIf[$getServerVar[kayıt]!=kapalı;{description:Alınacak Rol Ve Verilecek Rol Ayarlanmamış !}{title:HATA}{color:RED}]
  $onlyIf[$hasRoles[$authorID;$getServerVar[kgörevli]]!=false;{description:Üzgünüm Bunu Sadece <@&$getServerVar[kgörevli]> Rolüne Kişileri Kullanabilir !}{title:HATA}{color:RED}]
  $footer[Şanışer Kayıt Sistemi]
  $addTimestamp
`
});

  
  
  
  
bot.command({
    name: 'kayıt-rol',
    code: `
  $color[BLUE]
  $setServerVar[kayıt;aktif]
  $title[Başarılı]
  $description[
  Verilicek Rol \`$roleName[$mentionedRoles[1]]\` Olarak Ayarlanmıştır !]
  $setServerVar[vrol;$mentionedRoles[1]]
  $onlyPerms[admin;{description:Bunun İçin Yetkin Yok}{color:RED}]
  $onlyIf[$message!=;{description:Verilicek Rolü Ayarlamam İçin Rol Etiketlemelisin !}{title:HATA}{color:RED}]
 `
});
bot.command({
    name: 'kayıt-alrol',
    code: `
  $color[BLUE]
  $setServerVar[kayıt;aktif]
  $title[Başarılı]
  $description[
  Alınacak Rol \`$roleName[$mentionedRoles[1]]\` Olarak Ayarlanmıştır !]
  $setServerVar[arol;$mentionedRoles[1]]
  $onlyPerms[admin;{description:Bunun İçin Yetkin Yok}{color:RED}]
  $onlyIf[$message!=;{description:Verilicek Rolü Ayarlamam İçin Rol Etiketlemelisin !}{title:HATA}{color:RED}]
 `
});
bot.joinCommand({
        channel: "$getServerVar[hgkanal]", 
        code: `
        $color[BLUE]
        $title[Sunucumuza Birisi Katıldı !]
        $image[https://api.xzusfin.repl.co/card?avatar=$replaceText[$authorAvatar;.webp;.png;1]&middle=Hoşgeldin&name=$replaceText[$replaceText[$username[$authorID]#$discriminator[$authorID];#;%23;-1]; ;%20;-1]&bottom=Seninle+Beraber+$membersCount+Kisiyiz+yetkililerin seni kaydetmesini bekle!&background=https://media.discordapp.net/attachments/841211265618804758/857340324736532520/unknown.png?width=842&height=473] 
        `
})

bot.leaveCommand({
        channel: "$getServerVar[bbkanal]", 
        code: `
        $title[ Sunucumuzdan Biri  Ayrıldı !]
       $description[$username Sunucudan ayrıldı.Tekrar Görüşmek Üzere.]
       $color[BLUE]
      $image[$authorAvatar]
        `
})
bot.onLeave()

bot.command({
    name: 'erkek-rol',
    code: `
  $color[BLUE]
  $setServerVar[erkek;$mentionedRoles[1]]
  $title[Başarılı]
  $description[
  Erkek rolü \`$roleName[$mentionedRoles[1]]\` Olarak Ayarlanmıştır !]
  $setServerVar[erkek;$mentionedRoles[1]
  $onlyPerms[admin;{description:Bunun İçin Yetkin Yok}{color:RED}]
  $onlyIf[$message!=;{description:Erkek Rolünü Ayarlamam İçin Rol Etiketlemelisin !}{title:HATA}{color:RED}]
 `
});

bot.command({
    name: 'kız-rol',
    code: `
  $color[PURPLE]
  $setServerVar[kız;$mentionedRoles[1]]
  $title[Başarılı]
  $description[
  Kız rolü \`$roleName[$mentionedRoles[1]]\` Olarak Ayarlanmıştır !]
  $setServerVar[kız;$mentionedRoles[1]]
   $onlyPerms[admin;{description:Bunun İçin Yetkin Yok}{color:RED}]
  $onlyIf[$message!=;{description:Erkek Rolünü Ayarlamam İçin Rol Etiketlemelisin !}{title:HATA}{color:RED}]
 `
});
bot.command({
  name:"chat-ayarla",
  code:`
  $color[BLUE]
$setServerVar[chat;$mentionedChannels[1]]
$onlyIf[$mentionedChannels[1]!=;lütfen bir kanal etiketleyin!]
$title[Chat mesaj ayarı ayarlandı!]
$description[Artık birini kayıt ettikten sonra <#$mentionedChannels[1]> kanalına mesaj atacağım!]

`})

  
  
  
  
  


bot.joinCommand({
        channel: "$getServerVar[mutelog]", 
        code: `
        Kişi Muteli İken Sunucudan Çıkıp Tekrar Geldi Bende Tekrar Muteledim
        $giveRoles[$authorID;$getServerVar[muterol]]
        
        $onlyIf[$getUserVar[mutedurum;$authorID]!=hayır;]
        `
})
bot.joinCommand({
        channel: "$getServerVar[otorollog]", 
        code: `$giveRoles[$authorID;$getServerVar[otorol]]
       <a:seronay:852911320184913930> <@$authorID> Sunucumuza Hoşgeldin ! Otorol Başarıyla Verildi.
        `
})
bot.onJoined()

bot.command({
    name:"prefix",
    code:`
    $argsCheck[1;Prefix Değiştirmek İçin ş!prefix <yenideğer>]
    $setServerVar[prefix;$message]
    Artık Prefixim $message
    $onlyPerms[admin;Bunun İçin Yetkin Bulunmuyor]
   `
  })
bot.command({
  name: "bot-otorol",
  code:`
  $onlyIf[$checkContains[$message[1];ayarla;sıfırla]==true;Ayarla veya sıfırla ile belirtmelisin.]
  $onlyIf[message[1]!=;Ayarla veya sıfırla ile belirtmelisin]
  $if[$message[1]==ayarla]
 ** Botlara gelince artık rol vereceğim bilgilendirceğim kanal <#$mentionedChannels[1]>**
  $setServerVar[book;$mentionedChannels[1]]
  $setServerVar[boor;$mentionedRoles[1]]
  $onlyIf[$mentionedChannels[1]!=;Bir kanal etiketlemelisin]
  $onlyIf[$mentionedRoles[1]!=;Bir rol etiketlemelisin]
  $endif
  $if[$message[1]==sıfırla]
 Bot Otorol Başarıyla Sıfırlandı
  $setServerVar[boor;]
  $setServerVar[book;]
  $onlyIf[$getServerVar[book]!=;Otorol zaten kapalı]
  $endif
  $onlyBotPerms[manageroles;Botun **Rolleri Yönet** yetkisi bulunmamakta]
  $onlyPerms[admin;Bu komutu sadece **Yönetici** yetkisine sahip kişiler kullanabilir]
  
  `
})
bot.joinCommand({
  channel: "$getServerVar[book]",
  code:`
  
  $author[Bir Bot Girdi Ve Rolünü Verdim]
  $description[<@$authorID> Adlı Bota başarıyla <@&$getServerVar[boor]> Rolünü Verdim]
  $giveRole[$authorID;$getServerVar[boor]]
  $suppressErrors[Rol veremiyorum!!!]
$onlyIf[$isBot[$authorID]!=false;]
 $color[BLUE] `
})
bot.command({
name: "yardım",
code: `$reactionCollector[$splitText[1];everyone;1m;🔄,💰,⚔️,😂;byardım,ekonomiy,mody,eglencey;yes]
$textSplit[$sendMessage[{title:Yardım Menüme Hoşgeldin}{footer:$username#$discriminator İstedi:$authorAvatar}{description:
Selam dostum! yardım menümü isteyen kişi sendin demek.Yapabildiğim her şeyi sana anlatacağım.
║═════════════║

<:moderasyon34:873941525703319592> \`ş!moderasyon\` => Bu Komut Sana Moderasyon Komutlarını gösterir.

<:karo:873942928651878471> \`ş!eğlence\` => Bu Komut Sana Eğlence Komutlarını Gösterir. 

<:kullanc:873942883789574165> \`ş!ekonomi\`=> Bu Komut Sana Ekonomi Komutlarını Gösterir.

:robot: \`ş!botlist\` => Bu Komut Sana Botlist Komutlarını Gösterir.

║═════════════║

**ÇOK YAKINDA GELECEKLER**

✹ \`ş!müzik\` Bu Komut İle İstediğiniz Müziği Çalabilirsiniz.


║═════════════║

**» Bağlantılar**
[Destek Sunucum](https://discord.gg/cMHt7MDfJF)
[Davet Linkim](https://discord.com/oauth2/authorize?client_id=854051178426269787&scope=bot&permissions=8)
[Oy Verme Linkim](https://top.gg/bot/854051178426269787/vote)

║═════════════║

Beni $allmembersCount Üye Kullanmakta!


} {color:BLUE};yes]; ]`})
bot.awaitedCommand({
 name: "byardım",
 code: `$editMessage[$message[1];{title:Yardım}{footer:$username#$discriminator İstedi:$authorAvatar}{description:
Selam dostum! yardım menümü isteyen kişi sendin demek.Yapabildiğim her şeyi sana anlatacağım.
║═════════════║
<:moderasyon34:873941525703319592> \`ş!moderasyon\` => Bu Komut Sana Moderasyon Komutlarını gösterir.

<:karo:873942928651878471> \`ş!eğlence\` => Bu Komut Sana Eğlence Komutlarını Gösterir. 

<:kullanc:873942883789574165> \`ş!ekonomi\`=> Bu Komut Sana Ekonomi Komutlarını Gösterir.

:robot: \`ş!botlist\` => Bu Komut Sana Botlist Komutlarını Gösterir.

║═════════════║

**ÇOK YAKINDA GELECEKLER**

✹ \`ş!anime-xp\` Bu Komut İle Rastgele Anime Karakterleri Çıkartabilir Ve Çıkan Karaktere Göre Coin Kazanabilirsiniz.


║═════════════║

**» Bağlantılar**
[Destek Sunucum](https://discord.gg/cMHt7MDfJF)
[Davet Linkim](https://discord.com/oauth2/authorize?client_id=854051178426269787&scope=bot&permissions=8)
[Oy Verme Linkim](https://top.gg/bot/854051178426269787/vote)

║═════════════║

Beni $allmembersCount Üye Kullanmakta!
  $addTimestamp
} {color:BLUE}
]
`})
bot.awaitedCommand({
 name: "ekonomiy",
 code: `
 $editMessage[$message[1];{author:Ekonomi Komutlarıma Hoşgeldin $username:$authorAvatar} {description:
 İşte Harika Ekonomi Komutlarım!
  
<:kare:874006484097314876> \`ş!hesap-kur\`: Hesap Kurarsınız.

<:kare:874006484097314876> \`ş!cüzdan\`:Toplam paranızı gösterir.

<:kare:874006484097314876> \`ş!kumar\`:Kumar Oynarsınız.

<:kare:874006484097314876>\`ş!gönder\`:İstediğiniz Kişiye Para Gönderebilirsiniz.

<:kare:874006484097314876>\`ş!günlük\`:Günlük Paranızı Alırsınız.

<:kare:874006484097314876>\`ş!sıralama\`:En Çok Parası Olan Üyeleri Gösterir.

<:kare:874006484097314876> \`ş!aac\` : Rastgele Anime Karakterleri Sunar Ve Çıkan Karaktere Göre Para Kazanırsınız.(**BETA**)

<:kare:874006484097314876>\`ş!karakterlerim\` : Çıkardığınız Karakterleri Gösterir.

 
 
 
 } {color:BLUE} {footer:🔄 - Menüye Dönmek İçin Tıklayın}
]
 `
})
bot.awaitedCommand({
 name: "mody",
 code: `
 $editMessage[$message[1];{footer:🔄 - Menüye Dönmek İçin Tıklayın}
{author:Moderasyon Komutlarıma Hoşgeldin $username:$authorAvatar} {description:
Demek Moderasyon Komutlarımı isteyen sendin $username

İşte O Çok Değerli Moderasyon Komutlarım!

 <:kare:874006484097314876> \`ş!sil\`:yazılan sayı kadar mesajı siler.
  
 <:kare:874006484097314876> \`ş!slowmode\`:bulunduğunuz odada yazılan sayı kadar slowmode ayarlar.
  
<:kare:874006484097314876>  \`ş!ping\`:botun pingini gösterir.
  
<:kare:874006484097314876> \` ş!kick\`:seçilen kişiyi sunucudan atar.
  
<:kare:874006484097314876> \` ş!saas-aç\`:sa-as sistemini aktif eder.
  
<:kare:874006484097314876>  \`ş!ses-afk\`:bot sesliye girip afk kalır.
   
<:kare:874006484097314876>  \`ş!kayıt-sistemi\`:Kayıt sistemi komutlarını gösterir.
    
<:kare:874006484097314876>  \` ş!hg-kanal\`: hoşgeldin kanalını ayarlar.
  
<:kare:874006484097314876> \` ş!bb-kanal\`:BB mesajını ayarlar.
    
<:kare:874006484097314876> \`ş!otorol\`: Otorol sistemini aktif eder.
     
<:kare:874006484097314876> \`ş!otorol-kapat\`:Otorol sistemini kapatır.
    
<:kare:874006484097314876> \`ş!mute-sistemi\`: Mute Sistemi Komutlarını Gösterir.

<:kare:874006484097314876> \`ş!prefix\` : Prefixi Değiştirirsiniz. 

<:kare:874006484097314876> \`ş!bot-otorol ayarla\` : Sunucuya Giren Botlara Ayarlanan Bot Rolünü Verir.

<:kare:874006484097314876> \`ş!bot-otorol sıfırla\` : Bot Otorol Sistemini Kapatır.

<:kare:874006484097314876>  \`ş!afk\` : Afk Moduna Geçersiniz.

<:kare:874006484097314876>  \`ş!afk-boz\` : Afk Modundan Çıkarsınız.




} {color:BLUE} 
]

 `
})
 bot.awaitedCommand({
 name: "eglencey",
 code: `
 $editMessage[$message[1];{footer:🔄 - Menüye Dönmek İçin Tıklayın}
{author:Eğlence Komutlarıma Hoşgeldin $username:$authorAvatar} {description: 
<:kare:874006484097314876>  \`ş!25-miles\`:yazdığınız yer 25 miles ötede!
  
<:kare:874006484097314876> \`ş!hava-durumu\`:hava durumunu gösterir.
  
<:kare:874006484097314876>  \`ş!korona\`:korona verilerini gösterir.
  
<:kare:874006484097314876>  \`ş!çay-ısmarla\`:herkese çay ısmarlar.
  
<:kare:874006484097314876>  \`ş!ömrüm\`:ne kadar ömrün kaldığını gösterir.
 
<:kare:874006484097314876> \`ş!afk\`:afk kalırsınız.
 
<:kare:874006484097314876> \`ş!yazdır\`:birinin kimliğine bürünüp bir şey yazdırabilirsin!
 
<:kare:874006484097314876>  \`ş!balık-tut\`:balık tutarsın.
  
<:kare:874006484097314876>  \`ş!anime\`:random anime pp'si atar.
  
<:kare:874006484097314876>  \`ş!trump\`:trump yazdığınız yazıda tiwit atar.
  
<:kare:874006484097314876>  \`ş!impostor\`:impostor olarak gemiden atılırsınız.
  
<:kare:874006484097314876> \`ş!fal\`:falınıza bakarsınız.
   
<:kare:874006484097314876> \`ş!gif\`:random güzel gifler atar.
    
<:kare:874006484097314876> \`ş!gif-yaz\`:gif şeklinde yazdığınız yazıyı atar.
  
<:kare:874006484097314876>  \`ş!trendyol\`:Trendyol'da arama yaparsınız.(boşluk bırakacaksanız araya **+** koyunuz.)
  
<:kare:874006484097314876> \`ş!boks\`:Boks makinesine yumruk atarsınız.
} {color:BLUE} 



`
})
bot.command({
name: "karakterlerim",
code: `$reactionCollector[$splitText[1];everyone;1m;1️⃣,2️⃣,3️⃣;bir,iki,uc;yes]
$textSplit[$sendMessage[{title:İŞTE KARAKTERLERİN}
{image:
$getGlobalUserVar[karakter1]} 

{footer:$username#$discriminator İstedi:$authorAvatar}
{color:BLUE};yes]; ]`
})
bot.awaitedCommand({
 name: "bir",
 code: `
$editMessage[$message[1];{author:Sayfa 1 $username:$authorAvatar} {image:$getGlobalUserVar[karakter1]} {color:BLUE} {footer: - İlerlemek İçin Tıklayın}
]
`
})
bot.awaitedCommand({
 name: "iki",
 code: `
$editMessage[$message[1];{author:Sayfa 2 $username:$authorAvatar} {image:$getGlobalUserVar[karakter2]} {color:BLUE} {footer: - İlerlemek İçin Tıklayın}
]
`
})
bot.awaitedCommand({
 name: "uc",
 code: `
$editMessage[$message[1];{author:Sayfa 3 $username:$authorAvatar} {image:$getGlobalUserVar[karakter3]} {color:BLUE} {footer: - İlerlemek İçin Tıklayın}
]
`
})
bot.command({
  name:"afk-boz",
  code:`
  $title[ARTIK AFK DEĞİLSİN!]
  $description[**afk modundan başarıyla çıktın.**]
  $color[RED]
  $setGlobalUserVar[afk;kapalı]


  
  `
})