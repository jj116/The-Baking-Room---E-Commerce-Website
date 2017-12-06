module.exports = function(app) {
    var recipies = require('../controllers/recipies.server.controller');
    app.get('/recipies', recipies.render);
};
