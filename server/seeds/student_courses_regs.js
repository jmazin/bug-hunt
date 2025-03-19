async function seed(knex) {
  await knex("registrations").del();
  await knex("students").del();
  await knex("courses").del();

  await knex("students").insert([
    { id: 1, name: "Avery" },
    { id: 2, name: "Sophia" },
    { id: 3, name: "Liam" },
    { id: 4, name: "Amara" },
    { id: 5, name: "Daniela" },
  ]);
  await knex("courses").insert([
    { id: 1, name: "Software Development" },
    { id: 2, name: "Machine Learning" },
    { id: 3, name: "Music" },
    { id: 4, name: "Communications" },
  ]);

  await knex("registrations").insert([
    { student_id: 2, course_id: 1 },
    { student_id: 3, course_id: 3 },
    { student_id: 1, course_id: 3 },
    { student_id: 5, course_id: 3 },
    { student_id: 2, course_id: 3 },
    { student_id: 2, course_id: 2 },
    { student_id: 5, course_id: 1 },
    { student_id: 1, course_id: 1 },
    { student_id: 1, course_id: 2 },
    { student_id: 4, course_id: 4 },
    { student_id: 3, course_id: 2 },
    { student_id: 2, course_id: 4 },
  ]);
}

export { seed };
