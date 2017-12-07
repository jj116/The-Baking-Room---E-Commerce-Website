exports.render = function(req, res) {
	var currCart = req.cookies.CartCookie; 
	res.render('ecomm', {
		title: 'The Baking Room',
		user: req.user ? req.user.username : ''
	});
};
