const express = require('express');
const app = express();
app.use(express.json());

app.post('/', (req, res) => {
  const content = req.body.content;
  res.json({ content: content });
});

module.exports = app;
