var express = requiere("express");
var app = express();

app.use(express.static(__dirname + "/public"));
app.listen(0001,function(){
	console.log("servidor encendido");
});