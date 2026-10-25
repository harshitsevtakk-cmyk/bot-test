const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: 'har5050.aternos.me', // Replace with your server address
  port: 47671,                                // Replace with your server port if different
  username: 'Waamu',
  // auth: 'offline' ensures it works on cracked/Aternos servers without official Mojang login
  auth: 'offline'                             
});

bot.on('spawn', () => {
  console.log('SUCCESS: Bot has successfully spawned in the server!');
  bot.chat('Hello! Bot is online via GitHub Actions.');
});

// Catch chat parsing crashes so the bot doesn't exit abruptly
bot.on('message', (jsonMsg) => {
  // Safe listener for server messages
});

bot.on('error', (err) => {
  console.log('CONNECTION ERROR:', err);
});

bot.on('kicked', (reason) => {
  console.log('KICKED FROM SERVER:', reason);
});
