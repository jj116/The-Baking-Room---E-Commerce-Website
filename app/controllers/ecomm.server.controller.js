exports.render = function(req, res) {
	    	res.render('ecomm', {
    		title: 'The Baking Room',
    		user: req.user ? req.user.username : ''
    		});
};
