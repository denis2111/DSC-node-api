const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("./routes");
const mongoose = require("mongoose")

require("dotenv").config();

const server = express();

server.use(bodyParser.json());
server.use(cors());

mongoose.connect(
  process.env.DB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => console.log("connected to DB")
);

server.use("/", routes);

server.listen(
  process.env.PORT,
  console.log(`server started at port ${process.env.PORT}`)
);