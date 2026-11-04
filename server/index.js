const express=require("express");
const dotEnv=require("dotenv");
dotEnv.config();
const dbConfig=require("./db/config.js");
dbConfig.connectDB();
const userRouter=require("./routes/user.route.js");
const cors=require("cors");

const app=express();
app.use(express.json());
app.use(cors({
 origin:"http://localhost:5174"
}))
app.use("/api/auth",userRouter)
app.get("/", (req, res) => {
  res.send("Hello, World!");
});
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});