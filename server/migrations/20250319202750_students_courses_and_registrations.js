export function up(knex) {
  return knex.schema
    .createTable("students", (table) => {
      table.increments("id");
      table.string("name").notNullable();
    })
    .createTable("courses", (table) => {
      table.increments("id");
      table.string("name").notNullable();
    })
    .createTable("registrations", (table) => {
      table.increments("id");
      table.integer("student_id").unsigned().notNullable();
      table.integer("course_id").unsigned().notNullable();

      table.foreign("student_id").references("id").inTable("students");
      table.foreign("course_id").references("id").inTable("courses");
    });
}

export function down(knex) {
  return knex.schema.dropTable("registrations").dropTable("courses").dropTable("students");
}
