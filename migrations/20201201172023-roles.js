'use strict'

const tableName = 'roles'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface
        .createTable (tableName, {
          id: {
            type: Sequelize.TINYINT.UNSIGNED,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
          },
          name: {
            type: Sequelize.STRING (100),
            allowNull: false,
          },
          description: {
            type: Sequelize.STRING,
            allowNull: true,
          },
          created_at: {
            allowNull: true,
            type: Sequelize.DATE,
          },
          updated_at: {
            allowNull: true,
            type: Sequelize.DATE,
          },
          deleted_at: {
            allowNull: true,
            type: Sequelize.DATE,
          },
        }, {})
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface
        .dropTable (tableName)
  },
}
