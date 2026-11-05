const express = require("express");
const dotEnv = require("dotenv");
dotEnv.config();
const dbConfig = require("./db/config.js");
dbConfig.connectDB();
const userRouter = require("./routes/user.route.js");

const cors = require("cors");
const productRouter = require("./routes/product.route.js");

const app = express();
app.use(express.json());
app.use(
  cors({
    origin:
      process.env.CLIENT_URL || "https://darling-chaja-06b5f1.netlify.app",
    credentials: true,
  }),
);
app.use("/api/auth", userRouter);
app.use("/api/products", productRouter);
app.get("/", (req, res) => {
  res.send("Hello, World!");
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
