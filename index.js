const express = require('express');
const app = express();
const port = 8000;

const contactRouter = require('./routes/contacts');

app.use('/api', contactRouter);
app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

