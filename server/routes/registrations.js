import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);

import express from "express";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const regs = await knex
      // we are selecting 'name' from 'students' AND 'name' from 'courses',
      // and 'id' from 'registrations'.
      .select("registrations.id", "courses.name as course", "students.name as student")
      .from("registrations")
      // note the multiple joins!
      .join("students", "students.id", "registrations.id")
      .join("courses", "courses.id", "registrations.id");
    res.json(regs);
  } catch (e) {
    console.log(e);
    res.status(500).json({
      message: "Error getting regs",
    });
  }
});

export default router;
