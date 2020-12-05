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

const tableName = 'group_settings'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface
        .createTable (tableName, {
          group: {
            type: Sequelize.CHAR (10),
            allowNull: false,
            references: {
              model: 'users',
              key: 'id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
          },
          setting: {
            type: Sequelize.CHAR (10),
            allowNull: false,
            references: {
              model: 'settings',
              key: 'id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
          },
          value: {
            type: Sequelize.TEXT,
            allowNull: true,
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
        }).then (() => {
          queryInterface.addIndex (tableName, ['group', 'setting'], {
            name: tableName.concat ('_idx'),
          })
        })
  },

  down: async (queryInterface) => {
    return await queryInterface.dropTable (tableName)
  },
}
