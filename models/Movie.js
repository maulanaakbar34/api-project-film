const mongoose = require ('mongoose');

const movieSchema = new mongoose.Schema({
    title: {type:String,required:true,trim:true},
    director:{type:String,required:true,trim:true},
    year: {type:Number,required:true}
}, {timestamps:true});

 constMovie=mongoose.model('Movie',movieSchema);

 module.exports=Movie;