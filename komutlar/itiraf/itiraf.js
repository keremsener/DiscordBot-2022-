module.exports = {
  name:"itiraf",
  code:`
$dm
  $title[İTİRAF ALINDI!]
  $description[$username , \`$message\` İtirafını Başarıyla Aldım Anonim Bir Şekilde <#$getServerVar[ikanal]> 'Da Paylaştım! 
  $image[https://www.kisa.link/PGWt]]
  $color[GREEN]
  $onlyIf[$getServerVar[itiraf]!=açık;İTİRAF PAYLAŞMAK İÇİN OYUNU BAŞLATMALISINIZ.\`ş!itiraf-başlat\` YAZARAK OYUNU BAŞLATABİLİRSİNİZ.]
$channelSendMessage[$getServerVar[ikanal];{description:$message} {title:YENİ BİR İTİRAF DAHA!} {color:BLUE}]
$deleteCommand


  
  
  
  
  `
}