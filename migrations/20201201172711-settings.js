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

const tableName = 'settings'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface
        .createTable (tableName, {
          id: {
            type: Sequelize.CHAR (10),
            allowNull: false,
            primaryKey: true,
          },
          name: {
            type: Sequelize.STRING (150),
            allowNull: false,
          },
          default_value: {
            type: Sequelize.STRING,
            allowNull: false,
          },
          setting_type: {
            type: Sequelize.CHAR (1),
            allowNull: false,
            defaultValue: '0',
          },
          created_at: {
            type: Sequelize.DATE,
            allowNull: true,
          },
          updated_at: {
            type: Sequelize.DATE,
            allowNull: true,
          },
          deleted_at: {
            type: Sequelize.DATE,
            allowNull: true,
          },
        })
  },

  down: async (queryInterface) => {
    return queryInterface.dropTable(tableName);
  },
}
