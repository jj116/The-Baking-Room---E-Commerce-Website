exports.render = function(req, res) {
	    	res.render('recipies', {
    		title: 'The Baking Room',
    		user: req.user ? req.user.username : ''
    		});
};
