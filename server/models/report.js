'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class Report extends Model {}
  Report.init({
    cases: DataTypes.INTEGER,
    CountryId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER
  },{sequelize})
  Report.associate = function(models) {
    Report.belongsTo(models.User)
    Report.belongsTo(models.Country)
  };
  return Report;
};