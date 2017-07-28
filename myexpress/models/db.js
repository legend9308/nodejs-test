var mysql=require('mysql');
var pool  = mysql.createPool({
  connectionLimit : 10,
  host            : 'localhost',
  user            : 'root',
  password        : '',
  database        : 'blog'
});

exports.query=function(sql,param,callback){
	pool.getConnection(function(err,connection) {
	  connection.query(sql,param,function (error,results,fields) {
	    if (error){
	    	throw error;
	    }else{
	    	callback && callback(results);
	    }
	    connection.release();
	  });
	});
}