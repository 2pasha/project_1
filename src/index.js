const port = process.env.PORT || 3005;

const { createServer } = require('./createServer');
const mongoose = require('mongoose');

mongoose
  .connect(
    'mongodb+srv://pavlo:prosto123@cluster0.vrk8qax.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
  )
  .then(() => {
    console.log('database connected');
  })
  .catch(() => {
    console.log('database is not connected');
  });

createServer().listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
