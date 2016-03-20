'use strict';

import baseConfig from './base';

let config = {
  appEnv: 'dev',  // feel free to remove the appEnv property here
  apiHost: 'http://localhost:9000'
};

export default Object.freeze(Object.assign({}, baseConfig, config));
