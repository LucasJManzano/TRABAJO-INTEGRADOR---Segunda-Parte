const mongoose = require('mongoose');
const mongoDB = 'mongodb://127.0.0.1:27017/VerdeMenta' ;

//Configuración mongoose

const dbConnect = () => {

    mongoose.set('strictQuery', true);
    mongoose.connect(
        mongoDB, 
        {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        }, 
        (err)=> {
            if (err){
                    console.log('Error connection', err);
                    } else {
                    console.log('Success connection');
        }
    })
    };
    
    module.exports = dbConnect;