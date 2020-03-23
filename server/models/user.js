'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class User extends Model {}
  User.init({
    username: {
      type : DataTypes.STRING,
      allowNull : false,
      unique : {
        args : true,
        msg : 'username has taken'
      },
      validate : {
          notNull : {
          args : true,
          msg : 'Username can not be empty'
        },
          notEmpty :{
          args : true,
          msg : 'Username can not be empty'
        }
      }
    },
    password : {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        isNull : {
          args : true,
          msg : 'Password can not be empty'
        },
        notEmpty : {
          args : true,
          msg : 'Password can not be empty'
        }
      }
    }
    
  },{sequelize});
  User.associate = function(models) {
    User.hasMany(models.Report)
  };
  return User;
};