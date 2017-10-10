'use strict'
module.exports = function (sequelize, DataTypes) {
  var UserItinerary = sequelize.define('userItinerary', {
    UserId: DataTypes.INTEGER,
    ItineraryId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function (models) {
        // associations can be defined here
      }
    }
  })
  return UserItinerary
}
