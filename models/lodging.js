'use strict';
module.exports = function(sequelize, DataTypes) {
  var Lodging = sequelize.define('lodging', {
    name: DataTypes.STRING,
    notes: DataTypes.TEXT,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE,
    cost: DataTypes.INTEGER,
    currency: DataTypes.STRING,
    bookingStatus: DataTypes.BOOLEAN,
    bookedThrough: DataTypes.STRING,
    bookingConfirmation: DataTypes.STRING,
    attachment: DataTypes.STRING,
    roomType: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Lodging;
};
