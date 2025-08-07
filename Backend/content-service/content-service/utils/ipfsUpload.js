// const axios = require('axios');
// const FormData = require('form-data');
// require('dotenv').config();

// const pinToIPFS = async (fileBuffer, fileName) => {
//   const formData = new FormData();
//   formData.append('file', fileBuffer, fileName);

//   const res = await axios.post("https://api.pinata.cloud/pinning/pinFileToIPFS", formData, {
//     maxBodyLength: Infinity,
//     headers: {
//       ...formData.getHeaders(),
//       pinata_api_key: process.env.PINATA_API_KEY,
//       pinata_secret_api_key: process.env.PINATA_SECRET_API_KEY
//     }
//   });

//   return `https://gateway.pinata.cloud/ipfs/${res.data.IpfsHash}`;
// };

// module.exports = pinToIPFS;




const axios = require('axios');
const FormData = require('form-data');
require('dotenv').config();

const pinToIPFS = async (fileBuffer, fileName) => {
  try {
    if (!fileBuffer || !fileName) {
      throw new Error("Missing fileBuffer or fileName");
    }

    const formData = new FormData();
    formData.append('file', fileBuffer, fileName);

    const res = await axios.post("https://api.pinata.cloud/pinning/pinFileToIPFS", formData, {
      maxBodyLength: Infinity,
      headers: {
        ...formData.getHeaders(),
        pinata_api_key: process.env.PINATA_API_KEY,
        pinata_secret_api_key: process.env.PINATA_SECRET_API_KEY
      }
    });
     console.log("✅ IPFS Upload Success:", res.data);
    return `https://gateway.pinata.cloud/ipfs/${res.data.IpfsHash}`;

  } catch (error) {
    console.error('📛 IPFS Upload Error:', error?.response?.data || error.message || error);
    throw new Error('IPFS upload failed');
  }
};

module.exports = pinToIPFS;

