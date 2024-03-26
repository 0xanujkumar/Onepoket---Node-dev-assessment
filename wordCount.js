const fs = require('fs');


function countWords(text) {
  
  const words = text.split(/\s+/);

  
  const nonEmptyWords = words.filter(word => word !== '');

  return nonEmptyWords.length;
}


module.exports = function wordCount() {
 
  fs.readFile('data.txt', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      return;
    }

    
    const wordCount = countWords(data);

    console.log('Total word count:', wordCount);
  });
};
