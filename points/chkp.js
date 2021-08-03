module.exports = {
  
  name: "points",
  code: `$title[Check Points!]
$description[<@$mentioned[1]> has $getGlobalUserVar[points;$mentioned[1]] Points!]


$argsCheck[1;To Use: \`$getServerVar[prefix]points <@user> \`]
$color[$random[0;999999]]


`
}

 
