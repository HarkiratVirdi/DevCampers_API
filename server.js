const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });
const morgan = require("morgan");
const bootcamps = require("./routes/bootcamps");
const connectDB = require("./config/db");

const app = express();
app.use(express.json());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

connectDB();

app.use("/api/v1/bootcamps/", bootcamps);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, console.log("Port running on ", PORT));

process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`);
  server.close(() => process.exit(1));
});
