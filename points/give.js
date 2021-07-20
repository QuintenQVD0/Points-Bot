module.exports = {
  
  name: "give",
  code: `$title[Give Points!]
$description[ You just give <@$mentioned[1]> $message[2] Points!]

  $setGlobalUserVar[points;$sum[$getGlobalUserVar[points;$mentioned[1]];$message[2]];$mentioned[1]]


$onlyIf[$message[2]>=1;**You can only give more than 1 points.**
$argsCheck[2;To Use: \`$getServerVar[prefix]give <@user> <ammount>\`]]
$onlyPerms[admin;❌ **You need Administrator Permissions!**]

$color[$random[0;999999]]


`
}

 