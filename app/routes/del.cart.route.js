module.exports = function(app) {
    var cart = require('../controllers/cartdel.cart.controller');
    app.route('/cartdel')
    .post(cart.removefc);
};
