		function route (handler, pathname) {
			console.log("Route this is url" + pathname);
			if (typeof handler[pathname] === 'function') {
				return handler[pathname]();
			} else {
				console.log("No handler");
				return "404 NOt found";
			}
		}

		exports.route = route;