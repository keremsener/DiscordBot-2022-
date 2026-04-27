module.exports = {
  name:"aac3",
  code:`
  $if[karakter2==açık]
   $title[HARİKA BİR ANİME KARAKTERİ ÇIKARDIN!]
$description[
  $setGlobalUserVar[karakter1;$randomText[
    https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHshgbaAY6urqSYUBtaMUXTKvH7XbISDK32g&usqp=CAU ;https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBSg79Ki68VmKjNP2JCpPD4BNTxcUimP8Elw&usqp=CAU;https://www.animeler.net/upload/media/posts/2021-05/31/animede-ana-karakterin-kendisini-unutturan-yan-karakterler_1622465725-b.jpg;https://cf.kizlarsoruyor.com/a56224/2939ce6d-2527-4165-b9fb-735e58a90d3d-m.jpg;https://www.hisglobal.com.tr/assets/images/uploads/1603808372.jpg;https://www.hisglobal.com.tr/assets/images/uploads/1603808331.jpg;https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNwPu-LtpQ6775-i_zZOti7BXbjoWlmC2x4_H4ZB7iubWEachSEXcIisru3-3u9VIR_Fg&usqp=CAU;https://i1.wp.com/herkesim.net/wp-content/uploads/2020/03/582793.png?resize=640%2C360&ssl=1;https://hikaruivy.files.wordpress.com/2013/04/haru.jpg;https://www.animeler.net/upload/media/entries/2018-10/19/3736-17-338cca784d23487b1221f261c14e724f.jpg;https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0g93Ud3h9ljxvgmQPfDmSeaf8cjXU0-GDFw&usqp=CAU;https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBk9J2qil1q4YOoeMgLXh_Kvk7Tt6M6ysrZg&usqp=CAU;https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV30GahIQfRdmHhiay7iCCVBcMOCsAHHPCJw&usqp=CAU;https://images-ext-1.discordapp.net/external/3-BKb5zGKqbyBPGjalF88ivoqeT1jO5t5ae_lxzlvpY/https/imgur.com/piMVA6a.png;https://images-ext-1.discordapp.net/external/mpLxGHMS4cn040nbLa-3O_x7vhwLUMB9k_lxwxniIRk/https/imgur.com/ekFToYb.png;https://images-ext-1.discordapp.net/external/okpqnTWozyDCngc9PbwJWeTSaOU7xmY6U_24GTh8yZE/https/media.discordapp.net/attachments/872026548692209738/872133093446795284/A3Edd0m.png;https://images-ext-2.discordapp.net/external/j_V6vC0KZnuWXKAM3jd15dI3XQfYGf75-cWjyZGlvL0/https/media.discordapp.net/attachments/472313197836107780/722676154972241971/A18HfAv.png;https://otakukart.com/wp-content/uploads/2021/09/strongest-characters-in-tokyo-revengers-2.jpg;https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXX6QdGGKZac4M1DpZenVD_Rnutgpczycuivmz2deIMMT1Gr-2QPKRAlkTTfjqESpnjGE&usqp=CAU;https://images-ext-2.discordapp.net/external/0ytOwnXbZB3UWeAtnFdNha96fndinvxoBsoxJl6v9to/https/cdn.nekos.life/avatar/avatar_03.png;https://images-ext-2.discordapp.net/external/-UuYvbKrrof--HTF4hel-9ZAv-xpqB-61aCN54PCdsg/https/cdn.nekos.life/avatar/avatar_57.png;https://images-ext-2.discordapp.net/external/Ex3Rmb62vSYYkc1U3jzvoZKY-i6hfFxts_rsjLpp-SI/https/cdn.nekos.life/avatar/avatar_11.png;https://images-ext-2.discordapp.net/external/WymQf74dHSUsobhimu0I8Ia06-TzCkD9pBAF2wRqO3A/https/cdn.nekos.life/avatar/avatar_14.png;https://static.wikia.nocookie.net/villains/images/4/48/MagmaAttack.jpg/revision/latest?cb=20190927194148;https://www.kisa.link/PGsd;https://www.kisa.link/PGsi;https://www.kisa.link/PGsj;https://www.kisa.link/PGsk
 


];$authorID]
$footer[$random[1000;3000] Cash kazandın 1 Karakter Daha Çıkartabilirsin! ]
  $color[BLUE]
  
  $image[
$getGlobalUserVar[karakter1]
]]
  


$setGlobalUserVar[para;$sum[$getGlobalUserVar[para;$authorID];$random[1000;3000]];$authorID]
$onlyIf[$getServerVar[karakter2]!=kapalı;]
$globalCooldown[20s;**20 Saniye Bekle!**]
$endIf



  `
}