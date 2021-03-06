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

const tableName = 'group_chat_readers'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface
        .createTable (tableName, {
          group: {
            type: Sequelize.CHAR (10),
            allowNull: true,
          },
          user: {
            type: Sequelize.CHAR (10),
            allowNull: true,
          },
          update_id: {
            type: Sequelize.CHAR (10),
            allowNull: true,
          },
          seen_by: {
            type: Sequelize.CHAR (10),
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
        }).then (async () => {
          await queryInterface.sequelize.query ('ALTER TABLE ' + tableName + ' ADD FOREIGN KEY ( `group`, `user`, `update_id` ) REFERENCES `group_chats` ( `group`, `user`, `update_id` ) ON DELETE SET NULL ON UPDATE CASCADE')

          return await queryInterface.addIndex (tableName, ['group', 'user', 'update_id', 'seen_by'], {
            name: tableName.concat ('_idx'),
          })
        })
  },

  down: async (queryInterface) => {
    return await queryInterface.dropTable (tableName)
  },
}
