// api/components/auth/index
const store = require('../../../store/dummy');
const ctrl = require('./controller');

module.exports = ctrl(store); 