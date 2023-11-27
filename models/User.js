const { DataTypes } = require("sequelize");
const sequelize = require("../config/database/db");

const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    balance: {
      type: DataTypes.INTEGER,
      defaultValue: 10000,
    },
  },
  {
    tableName: "users", // Specify the table name if it's different from the model name
  },
  {
    timestamps: false,
  }
);

module.exports = User;
