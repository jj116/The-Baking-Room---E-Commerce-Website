module.exports = function(app) {
    var pasteries = require('../controllers/pasteries.server.controller');
    app.get('/pasteries', pasteries.render);
};
