'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn('rooms', 'songuoi', {
        type: Sequelize.INTEGER,
        allowNull: true,
      }),
      queryInterface.addColumn('rooms', 'thoigian', {
        type: Sequelize.INTEGER,
        allowNull: true,
      }),
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all([queryInterface.removeColumn('rooms', 'songuoi'), queryInterface.removeColumn('rooms', 'thoigian')]);
  }
};
