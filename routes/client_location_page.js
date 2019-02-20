const express = require('express');
const router = express.Router();
const requestIp = require('request-ip');
const iplocation = require("iplocation").default;

router.get('/', (req, res) => {
	const reqClientIp = requestIp.getClientIp(req);
	const clientIp = reqClientIp.substr(reqClientIp.lastIndexOf(':') + 1);
	iplocation(clientIp, [], (err, result) => {
		if(err) {
			console.error(err);
			res.end('An error occurred loading this page.');
		}
		else {
			const details = result;
			for(key in details) {
				if(details[key] == null || details[key] == '')
					details[key] = 'Unknown';
			}
			const city = details['city'];
			res.render('client_location_page', { ip: clientIp, ip_city: city, ip_details: details } );
		}
	});
});

module.exports = router;
