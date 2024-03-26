const express = require('express');
const sumOfIntegers = require('./sum');
const wordCount = require('./wordCount');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const numbers = [1, 2, 3, 4, 5];
console.log(`Sum of integers: ${sumOfIntegers(numbers)}`);

wordCount();