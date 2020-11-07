const musicasTeste = require('../models/musicasSchema')

const getMusicas =  (req,res) => {
    console.log(req.url)
    musicasTeste.musicasCollection.find((error, musicas) =>{
        if(error){
            return res.status(500).send(error)
        } else{
            return res.status(200).send(musicas)
        }
    })
}

const getMusicasById =  (req,res) => {
   const idParam = req.params.id
   musicasTeste.musicasCollection.findById(idParam, (error, musicas) =>{
       if(error){
           return res.status(500).send(error)
       } else {
           if(musicas){
               return res.status(200).send(musicas)
           } else{
               return res.status(404).send("Musica não encontrada :( ")
           }
       }
   }) 
}


const addMusica = (req,res) => {
    console.log(req.url)
    const musicasBody = req.body
    const musicas = new musicasTeste.musicasCollection(musicasBody)

    musicas.save((error) =>{
        if(error){
            return res.status(400).send(error)
        } else {
            return res.status(201).send(musicas)
        }
    })
}


const updateMusica = (req, res) => {
    const idParam = req.params.id
    const musicasBody = req.body
    const novo = {new: true}

    musicasTeste.musicasCollection.findByIdAndUpdate(
        idParam,
        musicasBody,
        novo,
        (error, musicas) =>{
            if(error){
                return res.status(500).send(error)
            } else if (musicas) {
                return res.status(200).send(musicas)
            } else{
                return res.sendStatus(404)
            }
        }
    )    
}


const deleteMusica = (req, res) => {
    const idParam = req.params.id
    musicasTeste.musicasCollection.findByIdAndDelete(idParam, (error, musicas) =>
    {
        if(error){
            return res.status(500).send(error)
            } else{
                if(musicas){
                    return res.status(200).send("A musica foi apagada")
                }else {
                    return res.sendStatus(404)
                }
            }
        })
    } 

module.exports = {
    getMusicas, 
    getMusicasById, 
    addMusica, 
    updateMusica, 
    deleteMusica
}