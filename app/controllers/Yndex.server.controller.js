var Product = require('mongoose').model('Product');
var Order = require('mongoose').model('Order');
var fi = require('frequent-itemset');

exports.render = function(req, res, next) {
	var tli=[], lix;
	Order.find({}, function(err, prods) {
	    if (err) {
	    	return next(err);
	    }
	    else{
	    	for(var i=0; i<prods.length; i++){
	    		// console.log(prods[i].pid.map(String));
	    		tli.push(prods[i].pid.map(String));
	    	}
	    	// console.log(tli);
	    	lix = fi(tli, 0.5, true);
	    	lix = lix[0];
	    	lix = lix.map(Number);
	    	req.freqISets = lix;
	    	next();
	    }
	});
}

exports.getProductDetails =function(req, res, next){
	var  fpd=[] ;
	var productList = req.freqISets;
	for(var xk=0 ; xk < lix.length ; xk++){
	    Product.findOne({_pid:lix[xk]}, function(err, ipd){
	    	console.log(ipd);
	    		fpd.push(ipd);
	    	});
	    	console.log("**************");
	    	console.log(fpd); 
	}
	req.productDetails = fpd; 
	next();
}

exports.display = function(req, res){
	res.render('index', {
    	title: 'The Baking Room',
    	list:req.productDetails,
    	user: req.user ? req.user.username : ''
   	});
}
