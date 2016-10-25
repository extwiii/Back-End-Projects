var http = require('http');
var bl = require('bl'); 
       
     http.get(process.argv[2], function (response) {  
 
       response.pipe(bl(function(err,data){
       	if(err)
       		console.log(err);
       	var result=data.toString();
       	console.log(result);

          http.get(process.argv[3], function (response) {  
 
       response.pipe(bl(function(err,data){
        if(err)
          console.log(err);
        var result=data.toString();
        console.log(result);

        http.get(process.argv[4], function (response) {  
 
       response.pipe(bl(function(err,data){
        if(err)
          console.log(err);
        var result=data.toString();
        console.log(result);
     
       })) 
       response.on('error', console.error)  
     }).on('error', console.error) 
            
       })) 
       response.on('error', console.error)  
     }).on('error', console.error) 

       })) 
       response.on('error', console.error)  
     }).on('error', console.error) 