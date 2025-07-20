const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); 
const authRoutes = require("./routes/authRoutes");

const app = express();
const progressRoutes = require("./routes/progressRoutes");
app.use("/api/progress", progressRoutes);


// ✅ ENABLE cors middleware
app.use(cors());

// ✅ Parse incoming JSON

app.use(express.json());

// ✅ MongoDB connection
mongoose.connect("mongodb+srv://mouni:kamasani@cluster0.jejzdki.mongodb.net/looplearner")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB error:", err));

// ✅ Routes
app.use("/api/auth", authRoutes);

// ✅ Root route
app.get("/", (req, res) => {
  res.send("Welcome to LoopLearner Backend!");
});


app.listen(7000, () => {
  console.log("Server is running on http://localhost:7000");
});
