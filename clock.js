
import {Client} from 'eris'
const channelID = 'your channel id'
const client = new Client('insert-token-here', {
    intents: ['guilds'],
    messageLimit: 10,
});
client.on("ready", () => console.log("woke"))
setInterval(async () => {
    client.editChannel(channelID, {name: `UTC ${new Date().toUTCString().split(" ")[4]}`}).catch(console.error)
}, 60000)
