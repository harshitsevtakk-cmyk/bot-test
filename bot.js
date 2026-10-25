const mineflayer = require('mineflayer');

// Configure your bot connection details here
const bot = mineflayer.createBot({
  host: 'har5050.aternos.me', // Put your server address here
  port: 47671,                                // Put your server port here (default is 25565)
  username: 'Waamu'                         // The name your bot will use in the game
});

// Event: When the bot successfully spawns into the world
bot.on('spawn', () => {
  console.log('Success! The bot has joined the server.');
  bot.chat('Hello everyone! I am a GitHub Actions / Mineflayer bot.');
});

// Event: Handle errors if it fails to connect
bot.on('error', (err) => {
  console.log('Error connecting to server:', err);
});

// Event: Handle getting kicked (useful for debugging)
bot.on('kicked', (reason) => {
  console.log('Bot was kicked from the server:', reason);
});
