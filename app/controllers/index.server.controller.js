var Product = require('mongoose').model('Product');

exports.render = function(req, res) {
	Product.find({}, function(err, prods) {
	    if (err) {
	    	console.log("error");
	        return next(err);
	    }
	    else{
	    	res.render('index', {
    		title: 'The Baking Room',
    		list:prods,
    		user: req.user ? req.user.username : ''
    		});
	    }
	});
};
