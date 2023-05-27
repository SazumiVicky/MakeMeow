const { client } = require('./main');
const path = require('path');

client.onMessage((message) => {
  console.log('Received message:', message.body);
});

const runtimePlugin = require('./plugins/runtime');

runtimePlugin(client);
