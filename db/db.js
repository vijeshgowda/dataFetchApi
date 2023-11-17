import { OPTIONS } from "../configs/environmet.js";
import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool(OPTIONS);

export default pool;
