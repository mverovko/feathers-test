const errors = require('@feathersjs/errors');

function checkAvailability() {
  return async function (context) {
    const State = context.app.services.state.Model;
    let state;
    try {
      state = await State.findOne({ where: { abbreviation: context.data.abbreviation } });
    }
    catch (error) {
      throw error;
    }

    if (state)
      throw new errors.GeneralError('State with such abbreviation is already existed');
  };
}


module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [
      checkAvailability()
    ],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
