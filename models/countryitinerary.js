'use strict'
module.exports = function (sequelize, DataTypes) {
  var countryItinerary = sequelize.define('countryItinerary', {
    CountryId: DataTypes.INTEGER,
    ItineraryId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function (models) {
        // associations can be defined here
      }
    }
  })
  return countryItinerary
}
