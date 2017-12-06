module.exports = function(app) {
    var cakes = require('../controllers/cakes.server.controller');
    app.get('/cakes', cakes.render);
};
