const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "postgres://postgres:postgres@localhost:5432/testdb",
  {
    define: {
      timestamps: false,
    },
  }
);

module.exports = sequelize;
