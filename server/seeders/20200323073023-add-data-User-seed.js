'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
     return queryInterface.bulkInsert('Users', [{
       username : 'GustiPutra',
       password : '12345',
       createdAt : new Date(),
       updatedAt : new Date()
     }], {});
    },

  down: (queryInterface, Sequelize) => {
     return queryInterface.bulkDelete('Users', null, {});
  }
};
