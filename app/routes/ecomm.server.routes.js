module.exports = function(app) {
    var ecomm = require('../controllers/ecomm.server.controller');
    app.get('/ecomm', ecomm.render);
};
