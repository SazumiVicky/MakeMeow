const venom = require('venom-bot');
require('dotenv').config();
const fs = require('fs');
const path = require('path');

console.log("MakeMeow Berusaha Untuk Terhubung...");

venom
  .create('sessionName')
  .then((client) => start(client))
  .catch((error) => console.error(error));

function start(client) {
  console.log(
    "___  ___  ___   _   __ ________  ___ _____ _____  _    _\n" +
    "|  \\/  | / _ \\ | | / /|  ___|  \\/  ||  ___|  _  || |  | |\n" +
    "| .  . |/ /_\\ \\| |/ / | |__ | .  . || |__ | | | || |  | |\n" +
    "| |\\/| ||  _  ||    \\ |  __|| |\\/| ||  __|| | | || |\\/| |\n" +
    "| |  | || | | || |\\  \\| |___| |  | || |___\\ \\_/ /\\  /\\  /\n" +
    "\\_|  |_/\\_| |_/\\_| \\_/\\____/\\_|  |_/\\____/ \\___/  \\/  \\/\n"
  );

  console.log("◦ Developed by: Sazumi Viki");
  console.log("◦ MakeMeow Version: 1.0.0");
  console.log("◦ Library Venom-Bot");
  console.log("");
  console.log("◦ Ig: @moe.sazumiviki");
  console.log("◦ Fb: facebook.com/moe.sazumiviki");
  console.log("◦ Github: github.com/SazumiVicky");
  console.log("◦ Whatsapp: wa.me/+6285236226786");
  console.log("");
  console.log("Enjoy >_< Meow.....");

  function importPlugins() {
    const pluginsDir = path.join(__dirname, 'plugins');

    const pluginFiles = fs.readdirSync(pluginsDir);

    pluginFiles.forEach((file) => {
      const pluginPath = path.join(pluginsDir, file);
      require(pluginPath)(client);
    });
  }

  importPlugins();
}

module.exports.client = venom.client;
