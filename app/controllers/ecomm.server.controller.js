exports.render = function(req, res) {
	var cartItems = req.cookies.CartCookie;
	if (cartItems == undefined)
	{
		res.cookie('CartCookie',{items:[]});
		// console.log('cookie created successfully');
	} 
	else
	{	
		console.log("Cookie Exists Already");
	} 
	var currCart = req.cookies.CartCookie; 
	res.render('ecomm', {
		title: 'The Baking Room',
		user: req.user ? req.user.username : ''
	});
};