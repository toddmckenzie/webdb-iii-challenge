const knex = require('knex');
const router = require('express').Router();

const knexConfig = require('../knexfile.js');

const db = knex(knexConfig.development);

//working
router.get('/', (req, res) => {
    db('cohort')
        .then(result => {
            res.json(result)
        })
        .catch(error => {
            res.status(500).json({ message: 'cohorts not found'})
        })
})
//working
router.get('/:id', (req, res) => {
    db('cohort')
        .where({ id: req.params.id })
        .first()
        .then(result => {
            res.json(result)
        })
        .catch(error => {
            res.json({ message: 'cohort not found.'})
        })
})
//working
router.get('/:id/students', (req, res) => {
    db('student')
    .where({ cohorts_id: req.params.id })
    .then(result => {
        if (result.length === 0) {
            res.status(404).json({ message: 'cohort not found'})
       } else {
           res.json(result)
       }
    })
    .catch(error => {
        res.status(500).json({ message: 'Internal Server Error'})
    })
})
/*
router.get('/students', (req, res) => {
    db('student')
    .then(result => {
       res.status(200).json({ message: 'Internal Server Error'})
       
    })
    .catch(error => {
        res.status(500).json({ message: 'Internal Server Error'})
    })
})
*/
//working
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
//working
router.put('/:id', (req, res) => {
    db('cohort')
    .where({ id: req.params.id })
    .update(req.body)
    .then(result => {
        if (result > 0){
            res.json(result)
        } else {
            res.status(404).json({ messgae: 'Cohort Not Found'})
        }
        
    })
    .catch(error => {
        res.status(500).json({ message: 'internal server error'})
    })
})
//working
router.delete('/:id', (req, res) => {
    db('cohort')
    .where({ id: req.params.id })
    .del()
    .then(count => {
        if (count > 0){
           res.json(count) 
        } else {
            res.status(404).json({ message: 'Cohort Not Found'})
        }
        
    })
    .catch(error => {
        res.status(500).json({ message: 'Internal server error'})
    })
})
module.exports = router;