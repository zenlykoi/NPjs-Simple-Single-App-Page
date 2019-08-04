/*****Declaration*****/

var express = require("express");
var app = express();							
app.use(express.static("public"));
app.set("view engine", "ejs");					
app.set("views", "./views");					
var server = require("http").Server(app);	
const port = process.env.PORT || 3000;
server.listen(port,function(){
	console.log(`Server starting in port ${port} ...`);
});



/*****Routing*****/

app.get('/',function(request,response){
	response.render('index');
});

app.get('/blog',function(request,response){
	response.render('index');
});

app.get('/about',function(request,response){
	response.render('index');
});

app.get('/contact',function(request,response){
	response.render('index');
});


// => using component
