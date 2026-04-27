module.exports = {
  name:"hesap-kur",
  code:`
  $title[Hesap Bilgilerini Kaydettim!]
  
  $description[İsim ve Soyisim = $message[1] | $message[2]
  Yaş = $message[3]]
  $setGlobalUserVar[hesap;İsim = $message[1] | Soyisim = $message[2] | Yaş = $message[3];$authorID]
  $onlyIf[$isNumber[$message[3]]!=false;Girilen Yaş Sayi Degil !]
  $onlyIf[$getGlobalUserVar[hesap;$authorID]==yok; Hesabın Zaten Var !]
  $onlyIf[$message[3]!=; Hesabınız İçin İsim ve Soyisim ve Yaşınızı Giriniz !
  $thumbnail[https://www.ekonomist.com.tr/wp-content/uploads/2020/12/wsi-imageoptim-iStock-1063289558-1200x900.jpg]]
  $color[BLUE]
  $footer[$username;$authorAvatar]
  `}