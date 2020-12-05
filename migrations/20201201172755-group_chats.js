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

const tableName = 'group_chats'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface
        .createTable (tableName, {
          group: {
            type: Sequelize.CHAR (10),
            allowNull: false,
            primaryKey: true,
            references: {
              model: 'groups',
              key: 'id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
          },
          user: {
            type: Sequelize.CHAR (10),
            allowNull: false,
            primaryKey: true,
            references: {
              model: 'users',
              key: 'id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
          },
          update_id: {
            type: Sequelize.CHAR (10),
            allowNull: false,
            primaryKey: true,
          },
          parent_id: {
            type: Sequelize.CHAR (10),
            allowNull: true,
            primaryKey: false,
          },
          message: {
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
        }).then (async () => {
          return await queryInterface.addIndex (tableName, ['group', 'user', 'update_id', 'parent_id'], {
            name: tableName.concat ('_idx'),
          })
        })
  },

  down: async (queryInterface) => {
    return await queryInterface.dropTable (tableName)
  },
}
