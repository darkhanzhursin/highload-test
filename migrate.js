const { Umzug, SequelizeStorage } = require("umzug");

const sequelize = require("./config/database/db");
//console.log(sequelize);
const umzug = new Umzug({
  migrations: {
    glob: "./migrations/*.js",
  },
  context: sequelize.getQueryInterface(),
  storage: new SequelizeStorage({ sequelize }),
  logger: console,
});

async function runMigrations() {
  try {
    await umzug.up();
    console.log("Migrations have been executed successfully.");
  } catch (error) {
    console.error("Error executing migrations:", error);
  }
}

module.exports = runMigrations;
