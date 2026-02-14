const express = require('express');
const app = express();
app.use(express.json());

let candidates = [];

app.get('/candidates', (req, res) => {
  res.json(candidates);
});

app.post('/candidates', (req, res) => {
  const candidate = { id: Date.now().toString(), ...req.body };
  candidates.push(candidate);
  res.json(candidate);
});

app.listen(3000, () => console.log('API running on port 3000'));