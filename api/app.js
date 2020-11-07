const express = require('express');
const app = express();
const cors = require('cors');

const database = require('./model/repository')
database.connect()

const musicas = require('./routes/musicasRoutes.js')

app.use(cors())
app.use(express.json())
app.use('/', musicas)

module.exports = app;
