const express = require('express');
const router = express.Router();
const controller = require('../controller/musicasController')

router.get('/musicas', controller.getMusicas)

router.post('/musicas', controller.addMusica)

router.get('/musicas/:id', controller.getMusicasById)

router.put('/musicas/:id', controller.updateMusica)

router.delete('/musicas/:id', controller.deleteMusica)

module.exports = router;