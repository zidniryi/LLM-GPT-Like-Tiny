const express = require('express');
const axios = require('axios');
const app = express();
app.use(express.json());

app.post('/generate', async (req, res) => {
  const {model, prompt, raw, stream} = req.body;

  // Check for required fields
  if (!model || !prompt) {
    return res.status(400).json({error: 'model and prompt are required fields'});
  }

  try {
    // Constructing the options object from raw and stream
    const options = {
      raw: raw || false, // Default to false if not provided
      stream: stream || false // Default to false if not provided
    };

    // Forwarding the request to the local host Ollama API
    const response = await axios.post('http://localhost:11434/api/generate', {
      model,
      prompt,
      ...options // Spread the options object
    });

    // Sending back the response data to the original client
    return res.json(response.data);

  } catch (error) {
    console.error("Error processing request:", error);
    return res.status(500).json({error: "Internal Server Error"});
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
