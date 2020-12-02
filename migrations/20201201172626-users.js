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

const tableName = 'users'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface
        .createTable (tableName, {
          id: {
            type: Sequelize.CHAR (10),
            allowNull: false,
            primaryKey: true,
          },
          username: {
            type: Sequelize.CHAR (18),
            allowNull: true,
          },
          full_name: {
            type: Sequelize.STRING (150),
            allowNull: false,
          },
          country: {
            type: Sequelize.TINYINT.UNSIGNED,
            allowNull: false,
          },
          email: {
            type: Sequelize.STRING (200),
            allowNull: true,
          },
          email_verified_at: {
            type: Sequelize.DATE,
            allowNull: true,
          },
          password: {
            type: Sequelize.STRING,
            allowNull: true,
          },
          phone_number: {
            type: Sequelize.STRING (20),
            allowNull: true,
          },
          bio: {
            type: Sequelize.STRING,
            allowNull: true,
          },
          pin: {
            type: Sequelize.STRING,
            allowNull: true,
          },
          display_picture: {
            type: Sequelize.STRING,
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
          queryInterface.addIndex (tableName, ['id', 'username', 'country', 'email'], {
            name: tableName.concat ('_idx'),
          })
        })
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface
        .dropTable (tableName)
  },
}
