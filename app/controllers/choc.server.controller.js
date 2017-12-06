
exports.render = function(req, res) {
	    	res.render('choc', {
    		title: 'The Baking Room',
    		user: req.user ? req.user.username : ''
    		});
};
