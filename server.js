const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const artifactRoutes = require("./routes/artifactRoutes");
const favoriteRoutes = require("./routes/favoriteRoutes");
const uploadRoutes = require("./routes/uploadRoutes");
const translateRoutes = require("./routes/translateRoutes");

const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");

const app = express();

// connect database
connectDB();

app.use(cors());
app.use(express.json());

// Swagger config
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Museum API",
      version: "1.0.0",
      description: "Museum backend API documentation"
    },
    servers: [
      {
        url: "https://museum-backend-production-3150.up.railway.app"
      }
    ]
  },
  apis: ["./routes/*.js"]
};

const specs = swaggerJsdoc(options);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

// routes
app.use("/api/auth", authRoutes);
app.use("/api/artifacts", artifactRoutes);
app.use("/api/favorites", favoriteRoutes);
app.use("/api/upload", uploadRoutes);
app.use("/api/translate", translateRoutes);

// test route
app.get("/", (req, res) => {
  res.send("Museum API Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
