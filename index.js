const express = require("express");
const app = express();
const runMigrations = require("./migrate");
const port = 3000;

// bult-in middleware for json
app.use(express.json());
runMigrations();
app.use("/updateBalance", require("./routes/updateBalance"));

// Define a route
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});
