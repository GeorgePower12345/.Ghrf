const { Client, RichPresence } = require("discord.js-selfbot-v13");
const express = require('express')
const server = express();
const client = new Client({checkUpdate: false,});

server.all('/', (req, res)=>{
    res.send("Any problems? contact Lxnyz#7772 On Discord")
})

client.on("ready", async() => {
  const r = new RichPresence()
    .setApplicationId('1036786648987471882')
    .setType('WATCHING') //You can change it to STREAMING, PLAYING, LISTENING, WATCHING, COMPETING
    .setURL('https://twitch.tv/apgrgt') //You can use your own Twitch link
    
   // .setState('2 of 12') //Text 2
    
      .setName('AnonymousPlaysGR') //Text 1
    
      .setDetails('Check my Youtube Channel') //Text 3
    .setAssetsLargeImage('https://cdn.discordapp.com/attachments/1176952548545003660/1197972798476406854/channels4_profile.jpg?ex=65bd361c&is=65aac11c&hm=6a3eb90e3585c88141635fd224360f2af8c31e28d6800981fc90daa825079172&')
    
    //.setAssetsSmallImage('mp:attachments/1009061802593763398/1095000347526828116/1681138826284.png') Remove "//" in the ".setAssetsSmallImage" section if you want to use a small image 
    
    //.setAssetsLargeText('life is like walking trash')

  .addButton('Youtube','https://youtube.com/@apgr.?si=1O-yisi39faI1qOQ')
 
  .setStartTimestamp(Date.now())
                        
                client.user.setActivity(r.toJSON());
  console.log(client.user.tag)
})

server.listen(3000, () => {
  console.log("Listening to Port:3000")

client.on('debug', (a) => {
  if(a.startsWith("Hit a 429")) process.kill(1)
})
  
  client.login(process.env.Token)
});