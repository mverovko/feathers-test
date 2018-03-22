// Initializes the `orders` service on path `/orders`
const createService = require('feathers-sequelize');
const createModel = require('../../models/orders.model');
const hooks = require('./orders.hooks');

module.exports = function (app) {
  const Model = createModel(app);

  const options = {
    name: 'orders',
    Model
  };

  // Initialize our service with any options it requires
  app.use('/orders', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('orders');

  service.hooks(hooks);
};
