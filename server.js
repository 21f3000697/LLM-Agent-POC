require('dotenv').config(); // Load .env

const express = require('express');
const bodyParser = require('body-parser');
const { mockLLM, runTool } = require('./llm-api');

const app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname));

app.post('/llm-api', async (req, res) => {
  if (req.body.tool_call) {
    try {
      const result = await runTool(req.body.tool_call);
      res.json(result);
    } catch (e) {
      res.json({ result: `Backend error: ${e.message}` });
    }
  } else {
    const { messages, tools } = req.body;
    const response = await mockLLM(messages, tools);
    res.json(response);
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
