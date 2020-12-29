const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });
const morgan = require("morgan");
const bootcamps = require("./routes/bootcamps");
const courses = require("./routes/courses");
const connectDB = require("./config/db");
const errorHandler = require("./middlewares/error");

const app = express();
app.use(express.json());
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

connectDB();

app.use("/api/v1/bootcamps/", bootcamps);
app.use("/api/v1/courses/", courses);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, console.log("Port running on ", PORT));

process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`);
  server.close(() => process.exit(1));
});
