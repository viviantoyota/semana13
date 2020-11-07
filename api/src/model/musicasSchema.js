const mongoose = require('mongoose')
const Schema = mongoose.Schema

const musicasSchema = new Schema({
    _id:{
        type: mongoose.Schema.Types.ObjectId, 
        auto: true, 
        required: true 
    },
    id:{
        type: Number,
        required: false
    },
    name:{
        type: String,
        required: true
    },
    genre:{
        type: String,
        required:true
    },
    album:[{
        type: Object,
        required: true
    }],
    id:{
        type: Number,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    release_date:{
        type: String,
        required: true
    },
    artists:[{
        type: Object,
        required: true
    }],
    id:{
        type: String,
        required: true
    },
    name:{
        type: Number,
        required: true
    }
    
})


const musicasCollection = mongoose.model('musicas', musicasSchema)

module.exports = {musicasCollection}
