	var express = require('express');
	var path = require('path');
	var bodyParser = require('body-parser');
	var app = express();


	var todoItems = [
		{ id: 1, desc: 'the li 1' },
		{ id: 2, desc: 'the li 2'},
		{ id: 3, desc: 'the li 3'}
	]
	app.set('view engine', 'ejs');
	app.set('views', path.join(__dirname, 'views'));

	app.use(bodyParser());

	app.get('/' , function (req , res) {
		res.render('index', {
			title: 'My title',
			items: todoItems
		});
	});

	app.post('/add' , function (req , res) {
		var newItem = req.body.newItem;
		todoItems.push({

		})

	})


	app.listen(8080, function () {
		console.log('toi den day express');
	});