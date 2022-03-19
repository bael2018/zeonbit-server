const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const User = sequelize.define("users", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, defaultValue: "user" },
    email: { type: DataTypes.STRING, unique: true },
    message: { type: DataTypes.STRING },
});

module.exports = {
    User
}