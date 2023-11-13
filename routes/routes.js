import express from "express";
import person from "../controllers/personController.js";

const Router =  express.Router();

Router.route('/').get(person.persontest)

export default Router;