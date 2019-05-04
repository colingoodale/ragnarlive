module.exports = function (sequelize, DataTypes) {
    var Requests = sequelize.define("Requests", {
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        email: DataTypes.STRING,
        mobile_number: DataTypes.STRING,
        message: DataTypes.STRING,
    });
    return Requests;
};