import * as tslint from 'tslint';
import * as prettier_options from './index';

const config: tslint.Configuration.RawConfigFile = {
  rules: {
    // tslint-plugin-prettier
    prettier: [true, prettier_options],
  },
};

export = config;
