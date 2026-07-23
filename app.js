
const express = require("express");
const Router = require("./routes/index");
const { db, Poll, Option, Vote } = require("./database_scripts/index");
const cors = require("cors");

const app = express();
const PORT = 3000;

//middle-ware
app.use(express.json());
app.use(cors());

app.use("/", Router);

// db.authenticate()
//   .then(() => console.log("Connection established."))
//   .catch((err) => console.error("Unable to connect:", err));

db.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server actively running at http://localhost:${PORT}`);
  });
});
