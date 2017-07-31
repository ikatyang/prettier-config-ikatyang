# prettier-config-ikatyang

[![npm](https://img.shields.io/npm/v/prettier-config-ikatyang.svg)](https://www.npmjs.com/package/prettier-config-ikatyang)
[![build](https://img.shields.io/travis/ikatyang/prettier-config-ikatyang/master.svg)](https://travis-ci.org/ikatyang/prettier-config-ikatyang/builds)

prettier config for ikatyang

[Changelog](https://github.com/ikatyang/prettier-config-ikatyang/blob/master/CHANGELOG.md)

## Install

```sh
# using npm
npm install --save-dev prettier-config-ikatyang

# using yarn
yarn add --dev prettier-config-ikatyang
```

## Usage

- (prettier.config.js)

  ```js
  module.exports = require('prettier-config-ikatyang');
  ```

- (tslint.json)

  ```json
  {
    "extends": "prettier-config-ikatyang/tslint"
  }
  ```

  **NOTE**: need to install [tslint-plugin-prettier](https://github.com/ikatyang/tslint-plugin-prettier) simultaneously

## Development

```sh
# lint
yarn run lint

# build
yarn run build
```

## License

MIT © [Ika](https://github.com/ikatyang)
