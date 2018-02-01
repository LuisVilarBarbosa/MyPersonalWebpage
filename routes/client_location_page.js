const express = require('express');
const router = express.Router();
const requestIp = require('request-ip');
const where = require('node-where');

router.get('/', (req, res) => {
	const reqClientIp = requestIp.getClientIp(req);
	const clientIp = reqClientIp.substr(reqClientIp.lastIndexOf(':') + 1);
	where.is(clientIp, function(err, result) {
		if(err) {
			console.error(err);
			res.end('An error occurred loading this page.');
		}
		else {
			const city = result.attributes['city'];
			const details = result.attributes;
			res.render('client_location_page', { ip: clientIp, ip_city: city, ip_details: details } );
		}
	});
});

module.exports = router;
