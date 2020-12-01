'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface
        .createTable ('countries', {
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
          iso3: {
            type: Sequelize.CHAR (3),
            allowNull: false,
          },
          iso2: {
            type: Sequelize.CHAR (2),
            allowNull: false,
          },
          emoji: {
            type: Sequelize.STRING (5),
            allowNull: true,
          },
          emoji_unicode: {
            type: Sequelize.STRING (50),
            allowNull: true,
          },
          phone_code: {
            type: Sequelize.STRING (5),
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
        }).then (() => {
          queryInterface.addIndex ('countries', ['iso3', 'iso2'], {
            type: 'FULLTEXT',
            name: 'countries_idx',
          })
        })
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface
        .dropTable ('countries')
  },
}
