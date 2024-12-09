const express = require('express');
const app = express();
app.use(express.json());
/**
 * POST / endpoint
 * This endpoint receives a JSON body, extracts the "content" field, 
 * and sends it back in the response as JSON.
 */
app.post('/', (req, res) => {
  const content = req.body.content;
  res.json({ content: content });
});

module.exports = app;
