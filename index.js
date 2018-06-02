const fs = require('fs');

const Logger = ({ path = 'logger.log', namespace } = {}) => {
  const separator = '\n\n------------------------------------------------------\n\n';
  const toFile = ({ text }) => {
    if (fs.existsSync(path) === false) {
      fs.writeFileSync(path, text, { encoding: 'utf8' });
    }
    fs.appendFileSync(path, text);
    fs.appendFileSync(path, separator);
  };

  const toConsole = ({ text }) => {
    if (namespace !== undefined) {
      console.log(namespace, text);
    } else {
      console.log(text);
    }
    console.log(separator);
  };

  const log = ({ text }) => {
    toFile({ text });
    toConsole({ text });
  };

  return { toFile, toConsole, log };
};

module.exports = Logger;
