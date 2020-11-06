const percyHealthCheck = require('@percy/cypress/task'); // eslint-disable-line import/no-internal-modules

module.exports = (on, config) => {
  on('task', percyHealthCheck);
};
