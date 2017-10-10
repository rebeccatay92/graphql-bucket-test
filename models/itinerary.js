'use strict'
module.exports = function (sequelize, DataTypes) {
  var Itinerary = sequelize.define('itinerary', {
    name: DataTypes.STRING,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE,
    pax: DataTypes.INTEGER,
    budget: DataTypes.INTEGER,
    travelInsurance: DataTypes.STRING
  }, {
    classMethods: {
      associate: function (models) {
        // associations can be defined here
      }
    }
  })
  return Itinerary
}
