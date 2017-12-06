module.exports = function(app) {
    var choc = require('../controllers/choc.server.controller');
    app.get('/choc', choc.render);
};
