const path = require ('path');
const fs = require ('fs');
const Product = require('../database/models/Producto');    

//----------------------------------------------------------------------------------------

let controller = {
    
    products: async (req, res) => {
        const products = await Product.find();
        return res.render('product', { productos: products })
    },
    detail: async (req, res) => {
        const product = await Product.findById(req.params.id);
        res.render('detail', { productos: product })
    },

    del: async (req,res) =>{
        const product = await Product.findById(req.params.id);
        res.render('delete', {productos: product})
    },

    create: (req, res) => {
        res.render('create')
    },
    edit: async (req, res) => {
        let product = await Product.findById(req.params.id);
        res.render('edit', { productos: product })
    },
    store: async (req, res) => {
        await Product.create({
            ...req.body,images: req.file.filename
            });
        return res.redirect('/productos');
    },
    update: async (req, res, next) => {
        await Product.findByIdAndUpdate(
            { _id: req.params.id },
            {   ...req.body,
                images: req.file.filename}
        );
        return res.redirect('/productos')
    },
    delete: (req, res) => {
        Product.findOneAndRemove({ _id: req.params.id }, (err, product) => {
            if (err) {
                console.log(err);
                re.render('404-page')
            }
            else {
                console.log("Removed: ", {product});
                //fs.unlinkSync(path.join('public/images', product.image))  NO FUNCIONA ¿¿??
            }
            return res.redirect('/productos');
        })
    }
};
module.exports = controller;