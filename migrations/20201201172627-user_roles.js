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

const tableName = 'user_roles'
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
          role: {
            type: Sequelize.TINYINT.UNSIGNED,
            allowNull: false,
            references: {
              model: 'roles',
              key: 'id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
          },
          created_at: {
            type: Sequelize.DATE,
            allowNull: true,
          },
          updated_at: {
            type: Sequelize.DATE,
            allowNull: true,
          },
          revoked_at: {
            type: Sequelize.DATE,
            allowNull: true,
          },
        }).then (() => {
          queryInterface.addIndex (tableName, ['user', 'role'], {
            name: tableName.concat ('_idx'),
          })
        })
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface
        .dropTable (tableName)
  },
}
