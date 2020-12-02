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

const tableName = 'contacts'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface
        .createTable (tableName, {
          user: {
            type: Sequelize.CHAR (10),
            allowNull: false,
            references: {
              model: 'users',
              key: 'id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
          },
          contact: {
            type: Sequelize.CHAR (10),
            allowNull: false,
            references: {
              model: 'users',
              key: 'id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
          },
          display_name: {
            type: Sequelize.STRING (150),
            allowNull: true,
          },
          blocked: {
            type: Sequelize.CHAR (1),
            allowNull: false,
            defaultValue: '0',
          },
          blocked_until: {
            type: Sequelize.DATE,
            allowNull: true,
          },
          muted: {
            type: Sequelize.CHAR (1),
            allowNull: false,
            defaultValue: '0',
          },
          muted_until: {
            type: Sequelize.DATE,
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
        }).then (() => {
          queryInterface.addIndex (tableName, ['user', 'contact'], {
            name: tableName.concat ('_idx'),
          })
        })
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.dropTable (tableName)
  },
}
