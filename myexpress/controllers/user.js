var user_model=require('../models/user_model.js');
var blog_model=require('../models/blog_model.js');

exports.index=function(req,res,next){
	res.render('index_logined');
}
exports.reg=function(req,res,next){
	res.render('reg');
}
exports.doreg=function(req,res,next){
	var email=req.body.email;
	var name=req.body.name;
	var pass=req.body.pwd;

	user_model.insertUser(email,name,pass,function(result){
		if(result.affectedRows>0){
			res.redirect('login');
		}
	});
}
exports.login=function(req,res,next){
	res.render('login');
}
exports.dologin=function(req,res,next){
	var name=req.body.email;
	var pass=req.body.pwd;
	user_model.getNameByPass(name,pass,function(result){
		// console.log(result);
		if (result[0]) {
			req.session.name=result[0].NAME;
			// 可以用app.locals
			blog_model.getAll(function(result){
				res.render('index_logined',{
				'name':req.session.name,
				'posts':result
				});
			});
		}else{
			res.send('fail');
		}
	});
}