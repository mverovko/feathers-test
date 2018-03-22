
function includeRelation() {
  return function (hook) {
    const state = hook.app.services.state.Model;
    hook.params.sequelize = {
      raw: false,
      include: [ { model: state }],
    };
  };
}


module.exports = {  
  before: {
    all: [],
    find: [
      includeRelation()
    ],
    get: [
      includeRelation()
    ],
    create: [],
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
