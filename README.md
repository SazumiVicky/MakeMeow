![MakeMeow](https://cdn.jsdelivr.net/gh/SazumiVicky/MakeMeow@main/20230527_110838.jpg)

<p>
MakeMeow is a WhatsApp bot developed using Venom-Bot, a library that facilitates the usage of WhatsApp Web in bots. This bot is designed to provide additional functionality and ease of use for WhatsApp through automation and automated responses.

The features available in MakeMeow include sending and receiving messages, managing contacts, executing custom commands, and much more. The bot is developed by Sazumi Viki and is version 1.0.0.

This repository contains the source code and plugins used in MakeMeow. By utilizing Venom-Bot, this bot can interact with WhatsApp users automatically and perform predetermined tasks.

If you're interested in developing or using a reliable and user-friendly WhatsApp bot, MakeMeow can be an excellent choice. Enjoy the convenience and functionality of WhatsApp through this bot!

Note: This description is just an example and can be adjusted according to the actual needs and features of the MakeMeow bot.
</p>

# <h3>main.js</h3>

- imports the Venom-Bot module, which is a library for easier usage of WhatsApp Web in bots.

```javascript
const venom = require('venom-bot');
```
##

- imports the dotenv module, used for setting environment variables from the <code>.env</code> file.

```javascript
require('dotenv').config();
```
##

- imports the fs (file system) module, used for reading directories and files.

```javascript
const fs = require('fs');
```
##

- imports the path module, used for constructing file paths.

```javascript
const path = require('path');
```
##

- creates a WhatsApp session using Venom-Bot with the session name 'sessionName'. You can replace 'sessionName' with your desired session name.

```javascript
venom.create('sessionName')
```

##

- is the function executed after the WhatsApp session is successfully created.
- Console.log statements display information about the bot, such as the developer, version, and contact details.

```javascript
start(client)
```
##

-  function is used to import the available plugins from the 'plugins' directory.
-  The plugins are dynamically loaded using <code>require(pluginPath)(client)</code>, where <code>pluginPath</code> is the full path to the plugin and <code>client</code> is the WhatsApp client object provided by Venom-Bot.

```javascript
importPlugins()
```
##

- exports the WhatsApp client object, allowing other parts of the code to access and use it.

```javascript
module.exports.client = venom.client;
```

# <h3>index.js</h3>

```javascript
const { client } = require('./main');
const path = require('path');

client.onMessage((message) => {
  console.log('Received message:', message.body);
});

const runtimePlugin = require('./plugins/runtime');

runtimePlugin(client);
```
##

- imports the <code>client</code> object from the 'main' module. It assumes that there is a file named 'main.js' or 'main.js' in the same directory as the current file.

```javascript
const { client } = require('./main');
```
##

- ets up an event listener for incoming messages. When a new message is received, the callback function is executed, and the received message's body is logged to the console using <code>console.log()</code>.

```javascript
client.onMessage((message) => { ... });
```
##

- imports the 'runtime' plugin from the 'plugins' directory, assuming that there is a file named 'runtime.js' or 'runtime.js' in that directory.

```javascript
const runtimePlugin = require('./plugins/runtime');
```
##

-  invokes the 'runtimePlugin' function and passes the WhatsApp client object as an argument. This allows the plugin to interact with the client and perform its designated tasks

```javascript
runtimePlugin(client);
```
# <h3>instalation</h3>

1. Clone or download this repository

```shell
https://github.com/SazumiVicky/MakeMeow.git
```
2. Install the required modules

```shell
npm install
```
3. And run the script

```shell
node main
```
##

<h3>Contributor</h3>

- [Sazumi Viki](https://instagram.com/moe.sazumiviki)
- [Venom Bot](https://github.com/orkestral/venom)
