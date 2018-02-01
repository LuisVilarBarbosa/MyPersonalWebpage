const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
const path = require('path');
const fs = require('fs');
const hbs = require('hbs');

const index = require('./routes/index');
const client_info_page = require('./routes/client_info_page');
const client_location_page = require('./routes/client_location_page');

// Register partials
var registerPartials = function(partialsDir) {
	if (fs.existsSync(partialsDir)) {
		var filenames = fs.readdirSync(partialsDir);
		filenames.forEach(function (filename) {
			var name = filename.replace('.hbs','');
			var template = fs.readFileSync(path.join(partialsDir, filename), 'utf8');
			hbs.registerPartial(name, template);
		});
	}
};
registerPartials(path.join(__dirname, 'views', 'partials'));

// Set view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// Set CSS and other resources routes
app.use('/public', express.static(path.join(__dirname, 'public')));

// Set routes
app.use('/', index);
app.use('/client_info_page', client_info_page);
app.use('/client_location_page', client_location_page);

app.listen(port, () => console.log('App listening on port ' + port + '!'));

module.exports = app;
