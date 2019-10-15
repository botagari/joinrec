var Discord = require('discord.js');
var client = new Discord.Client();
client.on('ready',()=>{
console.log(`Logged in!`)})
let prefix='-'
client.on('message',message=>{
if(message.content.startsWith(prefix+'join')){
let room = message.guild.channels.get(`${message.content.split(" ").slice(1).join(" ")}`)
if(!room) return message.channel.send('I Can\'t find this room :x:')
if(!room.type === 'voice') return message.channel.send('I Can\'t find this room :x:')
room.join().catch(err=>{return message.channel.send('no premissiond!')})
}if(message.content.toLowerCase().includes("giveaway")) {
if(message.author.id == "294882584201003009" || message.author.id == "553212598368337921") {
message.react("🎉")} }})
/////////////////////////
client.login(process.env.BOT_TOKEN)
