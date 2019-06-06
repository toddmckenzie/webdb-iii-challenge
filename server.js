const express = require('express');
const helmet = require('helmet');

const knex = require('knex');

const server = express();

server.use(express.json());
server.use(helmet());

const cohortsRouter = require('./cohorts/cohortsRouter')

server.use('/api/cohorts', cohortsRouter)


module.exports = server;