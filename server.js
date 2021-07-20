var dbd = require("dbd.js")
var fs = require("fs")

const bot = new dbd.Bot({
token: process.env.token,
prefix: "$getServerVar[prefix]"
})
 
//bot status
bot.status({
  text: "Source Code By ᴰᵉᵛ𝓦𝓪𝓵𝓴𝓮𝓻4𝓮𝓿𝓮𝓻#6969",
  type: "PLAYING",//PLAYING||COMPETEING||WATCHING||LISTENING
  time: 12
})
 
bot.onMessage()

//variable
bot.variables({
 prefix: ".",//Your Prefix
 points:"0",//dont change this!!

})
  
 //commands handler
var reader = fs.readdirSync("./points/").filter (file => file.endsWith(".js"))
for(const file of reader) {
  const command = require(`./points/${file}`)
  bot.command({
name: command.name, 
aliases: command.aliases,
code: command.code
  })
}

//help command here
bot.command({

name: "help",
code: `$title[$userTag[$clientID] HELP MENU]

$description[**$getServerVar[prefix]help** - This!
**$getServerVar[prefix]give**- Give Points
**$getServerVar[prefix]chkp**- Checks your Points ]

$color[RANDOM]
$footer[SOURCE CODE FROM CREATED BY ᴰᵉᵛ𝓦𝓪𝓵𝓴𝓮𝓻4𝓮𝓿𝓮𝓻#6969]
$addTimestamp`
})
