module.exports = {
  name:"itiraf-başlat",
  code:`
  $title[İTİRAF OYUNU BAŞLADI!]
  $description[**$username , itiraflarınızı DM'den veya sunucu üzerinden yazabilirsiniz!
                    __NOT!__
itiraflarınızı \`ş!itiraf\` ile yazmayı unutmayın!

**örnek:** ş!itiraf \`itirafım\`]
  $color[GREEN]
$setServerVar[itiraf]
  $onlyPerms[admin;{description:Bunun İçin Yetkin Yok}{color:RED}]
$onlyIf[$getServerVar[itiraf]==açık;BU ÖZELLİK ZATEN AÇIK!]

 `}