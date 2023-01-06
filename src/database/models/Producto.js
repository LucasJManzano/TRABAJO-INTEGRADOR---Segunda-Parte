const { Schema, model } = require('mongoose');

const Product = new Schema({
    name:{
        type: String, 
        require: true
        },

    brande:{
        type: String,
        require: true
        },

    price:{
        type: Number,
        require: true
        },
        
    description:{
        type: String,
        require: true
        },
    images:{
        type: String,
        require: true
        }
});


module.exports = model('Product', Product);