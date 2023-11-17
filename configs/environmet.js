import dotconfig from "dotenv";
dotconfig.config();

const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;

export const OPTIONS = {
  user: DB_USERNAME,
  database: "Adventureworks",
  password: DB_PASSWORD,
  port: 5432,
  host: "localhost",
};
