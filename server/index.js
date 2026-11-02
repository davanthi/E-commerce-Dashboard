const express=require("express");
const dotEnv=require("dotenv");
dotEnv.config();
const dbConfig=require("./db/config.js");
dbConfig.connectDB();
const app=express();
app.get("/", (req, res) => {
  res.send("Hello, World!");
});
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});