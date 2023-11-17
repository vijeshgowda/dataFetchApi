import express from "express";
import person from "../controllers/personController.js";

const Router = express.Router();

Router.route("/").get(person.persontest);

Router.route("/testPerson").get(person.pgTestPerson);

export default Router;
