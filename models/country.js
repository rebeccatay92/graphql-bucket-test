'use strict'
module.exports = function (sequelize, DataTypes) {
  var Country = sequelize.define('country', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function (models) {
        // associations can be defined here
      }
    }
  })
  return Country
}
