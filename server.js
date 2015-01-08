var http = require("http");
var fs = require('fs');

var Server = http.createServer(function(request, response){

	 	var path = request.url;
	 	var real_path = path.slice(1);
	  	var path_array = path.split("/");
	  	var length = path_array.length;
	  	var filename = path_array.slice(length-1).join();
	  	var l = filename.length;

	  	var five_pathend = filename[l-5] + filename[l-4] + filename[l-3] + filename[l-2] + filename[l-1];
	  	var four_pathend = filename[l-4] + filename[l-3] + filename[l-2] + filename[l-1];
	  	var three_pathend = filename[l-3] + filename[l-2] + filename[l-1];

	  	console.log(filename)
	  	console.log(path)

	if(path === "/"){
	  	fs.readFile("index.html", function(err, data){
		  	var text = data.toString();
		  	response.end(text);
	  })
}	

	else if(five_pathend === ".html"){
	  	fs.readFile(real_path, function(err, data){
		  	var text = data.toString();
		  	response.end(text);
	  })
}

	else if(path_array[length-1]==="projects"){
		var new_path = path_array
		var change_file = filename.slice(0, -5)
		fs.readFile(real_path, function(err,data){
			var text = data.toString();
		})
	}

	else if(four_pathend === ".css"){
		fs.readFile(real_path, function(err, data){
			var text = data.toString();
			response.end(text);
				if(four_pathend === ".png" || four_pathend === ".jpg"){
					var img = fs.readFileSync(real_path);
					response.writeHead(200, {'Content-Type': 'image/gif'});
					response.end(img, 'binary');
				}
		})
	}

	else if(four_pathend === ".png" || four_pathend === ".jpg"){
		var img = fs.readFileSync(real_path);
		response.writeHead(200, {'Content-Type': 'image/gif'});
		response.end(img, 'binary');
	}

	else if(three_pathend === ".js"){
		fs.readFile(real_path, function(err, data){
			var text = data.toString();
			response.end(text);
		})
	}

}).listen(8080);