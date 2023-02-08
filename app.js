const express = require ('express');
const app = express();
const path = require ('path');
const conectDB = require('./config/Mongo');


//IMPORTANTE configurar
//app.set('views', path.resolve (__dirname, 'views'));
app.set('view engine','ejs');
app.use(express.static(path.resolve(__dirname,'../public')));
app.use(express.urlencoded({extended:false}));
app.use(express.json());



//routes
const home= require ('./routes/main.js');
const products= require ('./routes/productsRoute.js');

app.use (home)
app.use (products)
app.use ((req,res,next) =>{
    res.render('404-page');
})

//levantando el servidor
app.listen(3000, () => console.log('Servidor en el puerto 3000'));

//Conexion a la DB
conectDB();