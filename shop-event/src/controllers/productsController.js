const path = require('path');

const productController = {
    cart: (req, res) => {
        res.sendFile(path.join(__dirname, '../views/productCart.html'));
    },
    detail: (req, res) => {
        res.sendFile(path.join(__dirname, '../views/productDetail.html'));
    }
}

module.exports = productController;