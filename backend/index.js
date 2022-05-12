const express = require("express");
const connection = require("./src/database/db");
const userRout = require("./src/router");
const {checkBatting} = require('./src/index')
const app = express();
app.use(express.json());
app.use('/api',userRout)
app.get("/", (req, res) => {
  res.send("hello world from Express");
});

app.listen(8000, () => {
    checkBatting()
  connection();
  console.log("welcome to port 8000");
});
