module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("User", {
    user_email: DataTypes.STRING,
    user_password: DataTypes.STRING,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    home_address_1: DataTypes.STRING,
    home_address_2: DataTypes.STRING,
    home_city: DataTypes.STRING,
    home_state: DataTypes.STRING,
    home_zipcode: DataTypes.STRING,
    credit_numb: DataTypes.STRING
  });
  User.associate = function (models) {
    User.hasMany(models.Pets, {
      onDelete: "cascade"
    });
  };
  User.associate = function (models) {
    User.hasMany(models.Subs, {
      onDelete: "cascade"
    });
  };
  return User;
};
