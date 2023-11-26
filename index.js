import express from "express";
import Router from "./routes/routes.js";

var app = express();
const PORT = 9000;

app.use(express.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(Router);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
