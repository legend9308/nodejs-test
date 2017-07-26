var http=require('http');
var fs=require('fs');
var url=require('url');

http.createServer(function(req,res){
	var pathname=__dirname+'/module/'+url.parse('index.html').pathname;
	var indexPage=fs.readFileSync(pathname,'utf-8');
	res.writeHead(200,{'Content-type':'text/html'});
	res.end(indexPage);
}).listen(3000);
