
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('student').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('student').insert([
        {name: 'Todd', cohorts_id: 1},
        {name: 'Sarah', cohorts_id: 3},
        {name: 'Amelia', cohorts_id: 2},
        {name: 'Norah', cohorts_id: 1},
        {name: 'Olive', cohorts_id: 3},
        {name: 'Gwen', cohorts_id: 3},
        {name: 'Barb', cohorts_id: 2 }
      ]);
    });
};
