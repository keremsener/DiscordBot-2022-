module.exports = {
  name:"tkm",
  code:`
  $color[BLUE]
  $description[Seçilen $message[1] :vs: $randomText[taş;kağıt;makas]]
  $onlyIf[$checkContains[$message[1];taş;kağıt;makas]!=false;+tkm taş/kağıt/makas]
  `
}