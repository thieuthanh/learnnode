var http = require("http");
var url = require("url");
function start (route , handler) {
	function onRequest(request, response) {
		var pathname = url.parse(request.url).pathname;
		console.log("Request for " + pathname + " received.");
		console.log("ten handler la gi" + handler);

		route(handler , pathname);
		response.writeHead(200, {"Content-Type": "text/plain"});
		response.write("Hello World");
		response.end();
	}

	http.createServer(onRequest).listen(8080);
	console.log("Server has started.");

// Console will print the message
//	console.log('Server running at http://127.0.0.1:8080/');
}

exports.start = start;