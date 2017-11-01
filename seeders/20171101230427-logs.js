'use strict';
let { logs } = require('./logs.json');
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Logs', logs, {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Logs', null, {});
  }
};
