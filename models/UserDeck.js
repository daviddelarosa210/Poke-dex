const { DataTypes } = require('sequelize');
const sequelize = require('../config/connections');

const UserDeck = sequelize.define('UserDeck', {
  createdByUser: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  // what other attributes needed?
});

module.exports = UserDeck;
