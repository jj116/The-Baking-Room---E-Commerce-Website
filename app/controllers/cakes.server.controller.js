exports.render = function(req, res) {
	    	res.render('cakes', {
    		title: 'The Baking Room',
    		user: req.user ? req.user.username : ''
    		});
};
