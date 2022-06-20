const path = require('path');

const productController = {
    cart: (req, res) => {
        res.render('productCart');
    },
    detail: (req, res) => {
        res.render('productDetail');
    },
    index1: (req, res) => {
        res.render('index1');
    },
    error404: (req,res)=> {
        res.render ('error404');
    }

}

module.exports = productController;
