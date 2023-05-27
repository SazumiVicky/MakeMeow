const axios = require('axios');
require('dotenv').config();

module.exports = (client) => {
  client.onMessage(async (message) => {
    if (message && message.body && message.body.toLowerCase() === 'ai') {
      await client.sendText(message.from, 'Masukkan pertanyaan Anda, contoh: ai apa itu web');
    } else if (message && message.body && message.body.toLowerCase().startsWith('ai')) {
      const userInput = message.body.substring(3).trim();
      const apiKey = process.env.LOLHUMAN_API_KEY;
      const apiUrl = `https://api.lolhuman.xyz/api/openai?apikey=${apiKey}&text=${encodeURIComponent(userInput)}&user=user-unique-id`;

      try {
        const response = await axios.get(apiUrl);
        const result = response.data.result;
        await client.sendText(message.from, result);
      } catch (error) {
        console.error('Error fetching AI response:', error);
        await client.sendText(message.from, 'Maaf, terjadi kesalahan dalam memproses permintaan AI.');
      }
    }
  });
};
