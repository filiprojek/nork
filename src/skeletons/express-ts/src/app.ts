import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";
import path from "path";
import cors from "cors";

const config = require("./utils/environment");
const routes = require("./routes");
const middlewares = require("./middlewares");

const port: Number = config.APP_PORT;
const app = express();

// MongoDB
const dbURI: string = config.DB_URI;
mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then((result) => {
    console.log("connected to db");
    app.listen(port, () => {
      console.log(`Server is listening on http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

// Middlewares
app.use(middlewares);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use(routes);
