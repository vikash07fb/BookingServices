'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    await queryInterface.addColumn(
      'Bookings',
       'noofseats',
        {
          type: Sequelize.INTEGER,
          allowNull: false,
          defaultValue: 1,
    });

    await queryInterface.addColumn(
      'Bookings',
       'total_cost',
        {
          type: Sequelize.INTEGER,
          allowNull: false,
          defaultValue: 0,
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

      await queryInterface.removeColumn('Bookings', 'noofseats');
      await queryInterface.removeColumn('Bookings', 'total_cost');
  }
};
