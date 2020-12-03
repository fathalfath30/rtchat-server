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

const tableName = 'countries'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface
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
          queryInterface.addIndex (tableName, ['iso3', 'iso2'], {
            type: 'FULLTEXT',
            name: tableName.concat ('_idx'),
          })
        })
  },

  down: async (queryInterface) => {
    return await queryInterface
        .dropTable (tableName)
  },
}
