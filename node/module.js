
var fs = require('fs');

module.exports = function (arr,filter,callback) {
	var content,temp=[];
	fs.readdir(arr, function(err,data){
		if (err)  
           return callback(err);


       data.forEach(function(i){
		content = i.split(".");
		if(filter== content[1])
		temp.push(i);
		});


		callback(null,temp);	
	});
}


