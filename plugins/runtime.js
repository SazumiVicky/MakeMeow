const axios = require('axios');
const fs = require('fs');

module.exports = (client) => {
  client.onMessage(async (message) => {
    if (message.body.toLowerCase() === 'runtime') {
      const uptime = process.uptime();
      const hours = Math.floor(uptime / 3600);
      const minutes = Math.floor((uptime % 3600) / 60);
      const seconds = Math.floor(uptime % 60);

      const reply = `Bot telah aktif selama ${hours} jam ${minutes} menit ${seconds} detik`;
      const imageUrl = 'https://cdn.jsdelivr.net/gh/SazumiVicky/MakeMeow-Storage@main/20230527_112126.jpg';

      try {
        const imageBuffer = await getImageBuffer(imageUrl);
        if (imageBuffer) {
          const filePath = 'runtime.jpg';
          fs.writeFileSync(filePath, imageBuffer, 'binary');
          await client.sendImage(message.from, filePath, 'runtime.jpg', reply);
          fs.unlinkSync(filePath);
        } else {
          console.error('Failed to fetch image buffer.');
        }
      } catch (error) {
        console.error('Error sending image:', error);
      }
    }
  });

  async function getImageBuffer(imageUrl) {
    try {
      const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
      return response.data;
    } catch (error) {
      console.error('Error fetching image:', error);
      return null;
    }
  }
};
