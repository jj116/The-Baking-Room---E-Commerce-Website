module.exports = function(app) {
    var cart = require('../controllers/glob.cart.controller');
    app.get('/cart', cart.render);
};
