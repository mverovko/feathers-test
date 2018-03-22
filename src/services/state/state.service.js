// Initializes the `state` service on path `/state`
const createService = require('feathers-sequelize');
const createModel = require('../../models/state.model');
const hooks = require('./state.hooks');

module.exports = function (app) {
  const Model = createModel(app);

  const options = {
    name: 'state',
    Model
  };

  // Initialize our service with any options it requires
  app.use('/state', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('state');

  service.hooks(hooks);
};
