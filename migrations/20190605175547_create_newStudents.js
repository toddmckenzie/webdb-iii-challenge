
exports.up = function(knex, Promise) {
    return knex.schema.createTable('student', function(tbl) {
        tbl.increments();
        tbl.string('name').notNullable();
        tbl
            .integer('cohort_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('cohort')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
    })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('student')
};
