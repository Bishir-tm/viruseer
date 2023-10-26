// 20665b689a93fbcdfff7d32442b18824970a3465b16f8b9ce2b0495c05b53f91
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const FormData = require('form-data');
const fileUpload = require('express-fileupload');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());
app.use(fileUpload());

const VIRUSTOTAL_API_KEY = '20665b689a93fbcdfff7d32442b18824970a3465b16f8b9ce2b0495c05b53f91';

app.post('/scan', async (req, res) => {
  const url = 'https://www.virustotal.com/api/v3/files';
  const selectedFile = req.files.file;

  const formData = new FormData();
  formData.append('file', selectedFile.data, {
    filename: selectedFile.name,
    contentType: selectedFile.mimetype,
    knownLength: selectedFile.size,
  });

  try {
    const response = await axios.post(url, formData, {
      headers: {
        'x-apikey': VIRUSTOTAL_API_KEY,
        ...formData.getHeaders(),
      },
    });

    // Handle the response from the VirusTotal API v3
    res.json(response.data);
  } catch (error) {
    console.error('Error scanning file:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/scan/:scanId', async (req, res) => {
  const { scanId } = req.params;
  console.log('scanid**********:' + scanId);

  try {
    const response = await axios.get(`https://www.virustotal.com/api/v3/files/${scanId}`, {
      headers: {
        'x-apikey': '20665b689a93fbcdfff7d32442b18824970a3465b16f8b9ce2b0495c05b53f91',
      },
    });

    // Check if the response contains data or an error
    if (response.data.data) {
      // Extract the relevant information from the VirusTotal API v3 response
      const scanResult = response.data.data.attributes.last_analysis_results;
      res.json(scanResult);
    } else {
      // Handle the case where the scan results are not available yet
      res.status(404).json({ error: 'Scan results not found. Please try again later.' });
    }
  } catch (error) {
    console.error('Error getting scan result:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
