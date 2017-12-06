var Order = require('mongoose').model('Order');

exports.render = function(req, res) {
	res.render('cart', {
		title: 'TBR | Cart',
		user: req.user ? req.user.username : ''
	});
};