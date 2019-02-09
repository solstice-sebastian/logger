import fs from 'fs';
import { TEXT_SECTION_SEPARATOR, Environment } from '@solstice.sebastian/constants';

type LoggerArgs = {
  path: string;
  namespace: string;
}

interface ILogger {
  log({ text }: { text: string }): void;
  log(text: string): void;
  toFile({ text }: { text: string }): void;
  toFile(text: string): void;
}

class Logger implements ILogger {
  path: string;
  namespace: string;

  constructor({ path = 'logger.log', namespace = '' }: LoggerArgs) {
    this.path = path;
    this.namespace = namespace;
  }

  toFile(args: string | { text: string }) {
    let text = args;
    if (typeof args !== 'string') {
      ({ text } = args);
    }
    const separator = TEXT_SECTION_SEPARATOR;
    if (fs.existsSync(this.path) === false) {
      fs.writeFileSync(this.path, text, { encoding: 'utf8' });
    }
    fs.appendFileSync(this.path, text);
    fs.appendFileSync(this.path, separator);
  };

  log(args: string | { text: string }) {
    let text = args;
    if (typeof args !== 'string') {
      ({ text } = args);
    }
    if (process.env.ENVIRONMENT !== Environment.TEST) {
      if (this.namespace !== '') {
        console.log(`${this.namespace}: ${text}`);
      } else {
        console.log(text);
      }
    }
  };
};

export { Logger };
