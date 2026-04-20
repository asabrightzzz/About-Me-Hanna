const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/hello', (req, res) => {
  res.json({ message: "Halo dari Backend!" });
});

app.listen(5000, () => console.log("Server lari di port 5000"));