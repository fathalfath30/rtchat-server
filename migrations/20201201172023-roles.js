/*
//
//  ______    _   _           _  __      _   _     ____   ___
// |  ____|  | | | |         | |/ _|    | | | |   |___ \ / _ \
// | |__ __ _| |_| |__   __ _| | |_ __ _| |_| |__   __) | | | |
// |  __/ _` | __| '_ \ / _` | |  _/ _` | __| '_ \ |__ <| | | |
// | | | (_| | |_| | | | (_| | | || (_| | |_| | | |___) | |_| |
// |_|  \__,_|\__|_| |_|\__,_|_|_| \__,_|\__|_| |_|____/ \___/
//
// Written by Fathalfath30.
// Email : fathalfath30@gmail.com
// Follow me on:
//  Github : https://github.com/fathalfath30
//  Gitlab : https://gitlab.com/Fathalfath30
//
*/
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

  down: async (queryInterface) => {
    return queryInterface
        .dropTable (tableName)
  },
}
