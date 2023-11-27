const { DataTypes } = require("sequelize");
async function up({ context: queryInterface }) {
  await queryInterface.createTable(
    "users",
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
    }
    //    console.log("Created users table!")
  );
}

async function down({ queryInterface }) {
  await queryInterface.dropTable("users");
}

module.exports = { up, down };
