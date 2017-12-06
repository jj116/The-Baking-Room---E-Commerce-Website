var Product = require('mongoose').model('Product');
var Order = require('mongoose').model('Order');
var fi = require('frequent-itemset');

exports.render = function(req, res) {
	var tli=[], lix, fpd=[] ;
	Order.find({}, function(err, prods) {
	    if (err) {
	    	return next(err);
	    }
	    else{
	    	// console.log(prods);
	    	for(var i=0; i<prods.length; i++){
	    		// console.log(prods[i].pid.map(String));
	    		tli.push(prods[i].pid.map(String));
	    	}
	    	// console.log(tli);
	    	lix = fi(tli, 0.5, true);
	    	lix = lix[0];
	    	lix = lix.map(Number);
	    	// console.log(lix);

	    	Product.find({
	    		'_pid':{ $in:lix }
	    	}, function(err, records){
	    		res.render('index', {
    				title: 'The Baking Room',
    				list:records,
    				user: req.user ? req.user.username : ''
    			});
	    	});
	    		
	    	}
	});
};
