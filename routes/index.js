const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	const github_link = 'https://www.github.com/LuisVilarBarbosa';
	const github_webpage_link = 'https://luisvilarbarbosa.github.io/';
	res.render('index', { github: github_link, github_webpage: github_webpage_link });
});

module.exports = router;
