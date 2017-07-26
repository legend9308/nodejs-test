var http=require('http');
var url=require('url');
var fs=require('fs');
var querystring=require('querystring');


http.createServer(function(req,res){
	var pathname=url.parse(req.url).pathname;
	switch(pathname){
		case '/index' :
			goIndex(res);
			break;
		case '/add' :
			resAdd(res,req);
			break;
	}
}).listen(3000);

console.log('server start port 3000');

function goIndex(res){
	//拼文件路径
	var pathname=__dirname+'/module/'+url.parse('form.html').pathname;
	//把文件读取到内存
	var indexPage=fs.readFileSync(pathname);
	//把内存数据打成包体发回浏览器
	res.writeHead(200,{'Content-type':'text/html'});
	res.end(indexPage);
}

function resAdd(res,req){
	var postData="";
	req.setEncoding('utf8');
	req.addListener('data',function(postDataChunk){
		postData+=postDataChunk;
	});

	req.addListener('end',function(){
		console.log(postData);
		var param=querystring.parse(postData);
		//console.log(param);
		res.writeHead(200,{'Content-type':'text/plain'});
		res.end(param.con);
	})
}



