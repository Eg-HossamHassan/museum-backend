const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const authRoutes = require("./routes/authRoutes");
const artifactRoutes = require("./routes/artifactRoutes");
const app = express();
const connectDB = require("./config./db");

connectDB();
app.use(cors());
app.use(express.json());
app.use("/api/auth",authRoutes);
app.use("/api/artifacts",artifactRoutes);
mongoose.connect(process.env.MONGO_URI)
.then(()=> console.log("MongoDB Connected"))
.catch(err=> console.log(err));

app.get("/", (req,res)=>{
 res.send("Museum API Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
