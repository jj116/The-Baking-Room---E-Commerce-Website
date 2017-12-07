var Product = require('mongoose').model('Product');

exports.render = function(req, res) {
	var cartItems = req.cookies.CartCookie;
	var list = [];var tmp;  
	if (cartItems != undefined){ 
		tmp = cartItems.items;
		Product.find({
	    		'_pid':{ $in:tmp }
	    	}, function(err, records){
	    		res.render('cart', {
    				title: 'TBR | Cart',
    				list:records,
    				user: req.user ? req.user.username : ''
    			});
	    	});
	    } 
};

exports.addToCookie = function(req,res){
	var cartItems = req.cookies.CartCookie;
	if (cartItems == undefined)
	{
		res.cookie('CartCookie',{items:[req.body._pid]});
		console.log('cookie created successfully');
	} 
	else
	{	
		var tmp = cartItems.items; 
		// console.log("Curr Cart: " + tmp);
		// console.log("Received ID: " + req.body._pid);
		tmp.push(req.body._pid);
		tmp = tmp.map(Number);
		var tmp = tmp.filter(function(elem, index, self) {
    		return index === self.indexOf(elem);
		});
		// console.log(tmp);
		res.cookie('CartCookie',{items:tmp});
		// console.log("New Cookie: " + req.cookies.CartCookie);		
		res.sendStatus(200);
	} 
}



