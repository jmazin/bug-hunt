import "dotenv/config";
import mysql from "mysql2/promise";

const config = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
};

const database = process.env.DB_DATABASE;

async function setupDatabase() {
  try {
    const connection = await mysql.createConnection(config);

    await connection.query(`DROP DATABASE IF EXISTS \`${database}\`;`);
    await connection.query(`CREATE DATABASE \`${database}\`;`);
    await connection.end();
    console.log("Created database:", database);
  } catch (error) {
    console.error("Error creating database:", error);
    process.exit(1);
  }
}

setupDatabase();
