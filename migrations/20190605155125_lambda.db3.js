
exports.up = function(knex, Promise) {
  return knex.schemea.createTable('cohorts', function(tbl) {
      tbl.increments();
      tbl.string('name', 128).notNullable().unique();
  })
};

exports.down = function(knex, Promise) {
  return knex.schemea.dropTableIfExists('cohorts')
};
