// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const customer = sequelizeClient.define('customer', {   
    firstName: {
      type: DataTypes.CHAR,
      field: "first_name"
    },
    lastName: {
      type: DataTypes.CHAR,
      field: "last_name"
    },
    gender: {
      type: DataTypes.CHAR,
    },
    address: {
      type: DataTypes.CHAR,
    },
    city: {
      type: DataTypes.CHAR,
    },
    latitude: {
      type: DataTypes.NUMERIC,
    },
    longitude: {
      type: DataTypes.NUMERIC,
    },
    stateId: {
      type: DataTypes.INTEGER,
      field: "state_id"
    }
  }, {
      timestamps: false,
      hooks: {
        beforeCount(options) {
          options.raw = true;
        }
      }
    });

  customer.associate = function (models) { // eslint-disable-line no-unused-vars
    models.customer.hasMany(models.orders, {
      constraints: true,
      foreignKey: 'customerId'
    });
    models.customer.belongsTo(models.state, {
      foreignKey: 'stateId'
    }); 
  };

  return customer;
};
