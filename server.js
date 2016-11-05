var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.use(express.static('public'));
app.set('views', './public/views');
app.set('view engine', 'jade');

app.get('/', function(req, res) {
	res.render('index', {
		title: 'React Weather'
	});
});

app.listen(3000, function() {
	console.log('express server is up on port ' + port);
});
