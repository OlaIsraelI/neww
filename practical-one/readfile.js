const fs = require('fs');

fs.writeFile('welcome.txt', 'Hello Node', (err) => {
  if(err) throw err;
  console.log('Welcome.txt Created');
});

fs.readFile('Welcome.txt', 'utf8', (err, data) => {
  if(err) throw err;
  console.log(data);
});