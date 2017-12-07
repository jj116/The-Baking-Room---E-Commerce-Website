module.exports = function(app) {
    var cart = require('../controllers/glob.cart.controller');
    app.route('/cart')
    .get(cart.render)
    .post(cart.addToCookie);
};
