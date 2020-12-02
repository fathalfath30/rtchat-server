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

const tableName = 'private_chats'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface
        .createTable (tableName, {
          user: {
            type: Sequelize.CHAR (10),
            allowNull: false,
            primaryKey: true,
          },
          to: {
            type: Sequelize.CHAR (10),
            allowNull: false,
            primaryKey: true,
          },
          update_id: {
            type: Sequelize.CHAR (10),
            allowNull: false,
            primaryKey: true,
          },
          parent_id: {
            type: Sequelize.CHAR (10),
            allowNull: true,
          },
          messages: {
            type: Sequelize.TEXT,
            allowNull: false,
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
          read_at: {
            type: Sequelize.DATE,
            allowNull: true,
          },
        }).then (async () => {
          await queryInterface.addIndex (tableName, ['user', 'to', 'update_id', 'parent_id'], {
            name: tableName.concat ('_idx'),
          })
        })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable (tableName)
  },
}
