import * as tslint from 'tslint';
import * as prettier_options from './index';

const config: tslint.Configuration.RawConfigFile = {
  extends: 'tslint-plugin-prettier',
  rules: {
    prettier: [true, prettier_options],
  },
};

export = config;
