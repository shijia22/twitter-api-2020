'use strict';
module.exports = (sequelize, DataTypes) => {
  const Chat = sequelize.define('Chat', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    room: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'public'
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false,
    }
  }, {});
  Chat.associate = function(models) {
    Chat.belongsTo(models.User)
  };
  return Chat;
};