module.exports = {
  
    name: "remove",
    code: `$title[Remove Points!]
  $description[ You just removed <@$mentioned[1]> $message[2] Points!]
  
    $setGlobalUserVar[points;$sub[$getGlobalUserVar[points;$mentioned[1]];$message[2]];$mentioned[1]]
  
  
  $onlyIf[$message[2]>=1;**You can only remove more than 1.**]
  $argsCheck[2;To Use: \`$getServerVar[prefix]remove <@user> <ammount>\`]
  $onlyPerms[admin;❌ **You need Administrator Permissions!**]
  $color[$random[0;999999]]
  
  
  `
  }
  
  