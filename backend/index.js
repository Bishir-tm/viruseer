// cloudmersiveScan.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const fileUpload = require('express-fileupload');

const port =  process.env.PORT || 8080;
const app = express();
 
app.use(cors());
app.use(express.json());
app.use(fileUpload());

const CLOUDMERSIVE_API_KEY = process.env.CLOUDMERSIVE_API_KEY 

app.post('/scan', async (req, res) => {
  const url = 'https://api.cloudmersive.com/virus/scan/file';
  const selectedFile = req.files.file;

  try {
    const response = await axios.post(url, selectedFile.data, {
      headers: {
        'Apikey': CLOUDMERSIVE_API_KEY,
        'Content-Type': selectedFile.mimetype,
      },
    });

    // Handle the response from the Cloudmersive API
    res.json(response.data);
  } catch (error) {
    console.error('Error scanning file:', error.response ? error.response.data : error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});    

