const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	array_keys = ['accept', 'accept-language', 'user-agent', 'accept-encoding', 'connection'];
	
	let clientInfo = {};
	for(let i = 0; i < array_keys.length; i++)
		clientInfo[array_keys[i]] = req.headers[array_keys[i]];

	res.render('client_info_page', { info: clientInfo } );
});

module.exports = router;
