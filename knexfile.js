// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/lambdaschool.db3' 
    },
    useNullAsDefault: true
  }
};
/*
seeds: {
  directory: './seeds/cohorts'
}
*/