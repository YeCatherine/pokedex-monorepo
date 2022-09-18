const fs = require('fs');

fs.copyFile('./src/server/db.base.json', './src/server/db.json', (err) => {
  if (err) {
    throw err;
  } else {
    // eslint-disable-next-line no-console
    console.log('Mock data generated - src/server/db.json.');
  }
});
