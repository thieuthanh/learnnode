		function start() {
			console.log('Function start call');
			return "hello start";
		}

		function upload () {
			console.log('function upload call');
			return "hello upload";
		}

		exports.start = start();
		exports.upload = upload();