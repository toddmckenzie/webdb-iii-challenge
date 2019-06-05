const knex = require('knex');
const router = require('express').Router();

const knexConfig = requires('./knexfile.js');

const db = knex(knexConfig.development);


server.get('/', (req, res) {
    db('/cohorts')
        .then()
        .catch()
})

server.get('/:id', (req, res){
    db('/cohorts')
        .where({ id: req.params.id })
        .first()
        .then()
        .catch()
})

server.post('/', (req, res) {
    db('/cohorts')
    .insert(req.body, 'id')
    .then()
    .catch()
})

server.put('/:id', (req, res) {
    db('/cohorts')
    .where({ id: req.params.id })
    .update(req.body)
    .then()
    .catch()
})

server.delete('/:id', (req, res) {
    db('/cohorts')
    .where({ id: req.params.id })
    .del()
    .then()
    .catch()
})
module.exports = router;