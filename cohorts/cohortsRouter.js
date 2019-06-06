const knex = require('knex');
const router = require('express').Router();

const knexConfig = require('../knexfile.js');

const db = knex(knexConfig.development);


router.get('/', (req, res) => {
    db('cohort')
        .then(result => {
            res.json(result)
        })
        .catch(error => {
            res.status(500).json({ message: 'cohorts not found'})
        })
})

router.get('/:id', (req, res) => {
    db('cohort')
        .where({ id: req.params.id })
        .first()
        .then(result => {
            res.json({ message: 'cohort not found.'})
        })
        .catch()
})

router.get('/id:/students', (req, res) => {
    db('student')
    .where({ id: req.params.id })
    .then(result => {
        res.json(result)
    })
    .catch(error => {
        res.status(500).json({ message: 'Internal Server Error'})
    })
})

router.post('/', (req, res) => {
    db('cohort')
    .insert(req.body, 'id')
    .then(result => {
        res.status(201).json(result)
    })
    .catch(error => {
        res.status(500).json({ message: 'Internal server error'})
    })
})

router.put('/:id', (req, res) => {
    db('cohort')
    .where({ id: req.params.id })
    .update(req.body)
    .then(result => {
        res.json(result)
    })
    .catch(error => {
        res.status(500).json({ message: 'internal server error'})
    })
})

router.delete('/:id', (req, res) => {
    db('cohort')
    .where({ id: req.params.id })
    .del()
    .then(count => {
        res.json(count)
    })
    .catch(error => {
        res.status(500).json({ message: 'Internal server error'})
    })
})
module.exports = router;