module.exports = function (sequelize, DataTypes) {
    var Subs = sequelize.define("Subs", {
        food_sub: DataTypes.STRING,
        groom_sub: DataTypes.STRING,
        walk_sub: DataTypes.STRING,
        sit_sub: DataTypes.STRING
    });
    Subs.associate = function (models) {
        Subs.belongsTo(models.User, {
            foreignKey: {
                name: "id",
                allowNull: false
            }
        });
    };
    return Subs;
};
