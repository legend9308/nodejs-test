var db=require('./db.js');

exports.getAll=function(callback){
	var sql="select * from t_blogs";
	db.query(sql,[],callback);
}
