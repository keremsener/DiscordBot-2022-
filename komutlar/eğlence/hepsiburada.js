module.exports = {
  name:"hepsi-burada",
  code:`
  $argsCheck[>1;Ne Arayacağımı Yazmalısın.]
$title[Hepsi Burada da Aradım ve Buldum ! ]
$description[
<a:pinkarrow:853630200566513684> Aranan : $message
<a:pinkarrow:853630200566513684> Aratan : <@$authorID>
<a:pinkarrow:853630200566513684> Bulduğum [Sonuç](https://www.hepsiburada.com/ara?q=$message)]
$footer[$username Hepsi Burada da Aradı.;$authorAvatar]
$addTimestamp
$color[BLUE]

  
  
  `
}