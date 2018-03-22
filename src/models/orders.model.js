// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const orders = sequelizeClient.define('orders', {
    productName: {
      type: DataTypes.CHAR,
      field: "product_name"
    },
    itemCost: {
      type: DataTypes.NUMERIC,
      field: "item_cost"
    },
    customerId: {
      type: DataTypes.INTEGER,
      field: "customer_id"
    }
  }, {
    timestamps: false,
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  orders.associate = function (models) { // eslint-disable-line no-unused-vars
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return orders;
};
