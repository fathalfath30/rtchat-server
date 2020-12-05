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

const tableName = 'group_members'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface
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
          group: {
            type: Sequelize.CHAR (10),
            allowNull: false,
            references: {
              model: 'groups',
              key: 'id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
          },
          is_admin: {
            type: Sequelize.CHAR (1),
            allowNull: false,
            defaultValue: '0',
            comment: '0: false; 1: true;',
          },
          is_banned: {
            type: Sequelize.CHAR (1),
            allowNull: false,
            defaultValue: '0',
            comment: '0: false; 1: true;',
          },
          banned_until: {
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
          queryInterface.addIndex (tableName, ['user', 'group', 'is_admin', 'is_banned'], {
            name: tableName.concat ('_idx'),
          })
        })
  },

  down: async (queryInterface) => {
    return await queryInterface.dropTable (tableName)
  },
}
