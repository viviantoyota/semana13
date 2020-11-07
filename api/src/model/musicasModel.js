const fs = require('fs')
let allData = require('../data/data.json')

const selectAllData = () => {
    if(allData){
        return {error: null, data: allData}
    } else {
        return {error: {message: "Ocorreu um erro"}, data: null}
    }
}

const selectDataById = (id) => {
    const musicaId = id
    const dadoEncontrado = allData.find(item => item.id == musicaId)
    if (dadoEncontrado){
        return {error: null, data: dadoEncontrado}
    } else{
        return {error: {message:"Registro não encontrado na base"}, data: null}
    }
}

const insertData = (newMusica) => {
    const musicaFound = allData.find(musicas => musicas.name == newMusica.name)     
    
    if (!newMusica.id) {
        newMausica.id = Math.random().toString(36).substr(-8)
    }
 
    if(musicaFound) {
       return {error: {message: "Ops, registro duplicado"}} 
    } else {
        fs.writeFileSync('./src/data/data.json', JSON.stringify([...allData, newMusica]), 'utf8', (err) => {
            if (err) {
                console.log(err)
            }
        })
    
        return {error: null}
    }
}

const updateData = (id, dataToUpdate) => {
    const musicaId = id
    const musicaFound = allData.find(item => item.id == musicaId) 
    const musicaIndex = allData.indexOf(musicaFound) 

    if (musicaIndex >= 0) { 
        allData.splice(musicaIndex, 1, dataToUpdate)
        fs.writeFileSync('./src/data/data.json', JSON.stringify([allData]), 'utf8', (err) => {
            if (err) {
                console.log(err)
            }
        })

        return {error: null, data: selectDataById(id)}
    } else {
        return {error: {message: "Ops, não encontrei esse registro para poder alterá-lo"}, data: null}
    }
}

const deleteData = (id) => {
    const musicaId = id
    const musicaFound = allData.find(item => item.id == musicaId) 
    const musicaIndex = allData.indexOf(musicaFound) 



    if (musicaIndex >= 0) { 
        allData.splice(musicaIndex, 1)
        fs.writeFileSync('./src/data/data.json', JSON.stringify([allData]), 'utf8', (err) => {
            if (err) {
                console.log(err)
            }
        })
        return {error: null}
    } else {
        return {error: {message: "Ops, não encontrei esse registro para poder deletá-lo"}}
    }
}

module.exports = {
    selectAllData, 
    selectDataById, 
    insertData, 
    updateData, 
    deleteData
}