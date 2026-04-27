module.exports = {
  name:"trendyol",
  code:`
  $argsCheck[>1;Ne Arayacağımı Yazmalısın.]
$title[Trendyolda Aradım ve Buldum ! ]
$description[
<a:pinkarrow:853630200566513684> Aranan : $message
<a:pinkarrow:853630200566513684> Aratan : <@$authorID>
<a:pinkarrow:853630200566513684> Bulduğum [Sonuç](https://m.trendyol.com/sr?q=$message%20$message&st=$message%20$message&qt=$message%20$message&os=1)]
$footer[$username Trendyolda Aradı.;$authorAvatar]
$addTimestamp
$color[BLUE]

  
  
  
  `
}