var module = require("./module.js");

var arr = process.argv[2];
var filter = process.argv[3];
var content ;

	module(arr,filter,function(err,data){

		data.forEach(function(i){
			console.log(i);
		})	
	});	

