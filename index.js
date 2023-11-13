import express from "express";
import Router from "./routes/routes.js";

const app = express()
const PORT = 3000

app.use(express.json())

app.use(Router);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})