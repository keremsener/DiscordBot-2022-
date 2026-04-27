module.exports = {
  name:"korona",
  code:`
  $title[:flag_tr: Korona İstatistikleri :flag_tr:]
  $description[$thumbnail[https://cdn.discordapp.com/attachments/782961156447797281/789631407449833512/indir__1_-removebg-preview.png]
  
  Vaka Sayısı = $jsonRequest[https://corona.lmao.ninja/v2/countries/turkey;cases;]
  Bugün ki Vaka = $jsonRequest[https://corona.lmao.ninja/v2/countries/turkey;todayCases;]
  
Vefat Sayısı = $jsonRequest[https://corona.lmao.ninja/v2/countries/turkey;deaths;]
Bugün ki  Vefat = $jsonRequest[https://corona.lmao.ninja/v2/countries/turkey;todayDeaths;]


  İyileşmiş = $jsonRequest[https://corona.lmao.ninja/v2/countries/turkey;recovered;]
Bugün ki İyileşmiş = $jsonRequest[https://corona.lmao.ninja/v2/countries/turkey;todayRecovered;]

Test Sayısı = $jsonRequest[https://corona.lmao.ninja/v2/countries/turkey;tests;]
  
  
  
  
  ]
  
  `
}