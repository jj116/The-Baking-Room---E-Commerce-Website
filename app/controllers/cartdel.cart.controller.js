exports.removefc = function(req, res){
	var cartItems = req.cookies.CartCookie;
	if (cartItems != undefined)
	{	
		var tmp = cartItems.items; 
		// console.log("Curr Cart: " + tmp);
		// console.log("Received ID: " + req.body.dpid);
		var index = tmp.indexOf(parseInt(req.body.dpid));
		if (index > -1) {
    		tmp.splice(index, 1);
		}
		// console.log(tmp);
		// clearCookie('CartCookie');
		res.cookie('CartCookie',{items:tmp});
		// console.log("New Cookie: " + req.cookies.CartCookie);		
		res.sendStatus(200);
	}
}