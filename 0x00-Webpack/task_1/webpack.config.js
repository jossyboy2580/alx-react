const path = require('path');

module.exports = {
  output: {
    filename: 'bundle.js';
    path: path.resolve(__dirname, 'public')
  }
};
