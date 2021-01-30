require("dotenv").config();
const express = require("express");
const cors = require("cors");

const coronaRoutes = require("./coronaRoutes");

const app = express();

app.use(cors());
// allow use to parse for JSON
app.use(express.json());

// throughout entire app this home route..
app.use("/", coronaRoutes);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log("Server listening on " + port));
