var db=require('./db.js');

exports.insertUser=function(email,name,pass,callback){
	var sql="insert into t_users(ACCOUNT,PASSWORD,NAME) values(?,?,?)";
	db.query(sql,[email,pass,name],callback);
}
exports.getNameByPass=function(name,pass,callback){
	var sql="select * from t_users where ACCOUNT=? and PASSWORD=?";
	db.query(sql,[name,pass],callback);
}	