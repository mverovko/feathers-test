const customer = require('./customer/customer.service.js');
const state = require('./state/state.service.js');
const orders = require('./orders/orders.service.js');
module.exports = function (app) {
  app.configure(customer);
  app.configure(state);
  app.configure(orders);
};
