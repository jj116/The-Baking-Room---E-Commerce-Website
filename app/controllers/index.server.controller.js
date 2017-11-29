exports.render = function(req, res) {
    res.render('index', {
    	title: 'The Baking Room',
    	user: req.user ? req.user.username : ''
    });
};