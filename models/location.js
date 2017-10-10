'use strict'
module.exports = function (sequelize, DataTypes) {
  var Location = sequelize.define('location', {
    latitude: DataTypes.FLOAT,
    longitude: DataTypes.FLOAT,
    openingHour: DataTypes.DATE,
    closingHour: DataTypes.DATE,
    address: DataTypes.STRING,
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function (models) {
        // associations can be defined here
      }
    }
  })
  return Location
}
