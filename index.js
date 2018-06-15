const fs = require('fs');
const Constants = require('@solstice.sebastian/constants');

const Logger = ({ path = 'logger.log', namespace } = {}) => {
  const separator = Constants.TEXT_SECTION_SEPARATOR;
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
