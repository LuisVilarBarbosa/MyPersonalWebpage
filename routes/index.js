const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	const github_link = 'https://www.github.com/LuisVilarBarbosa';
	const github_webpage_link = 'https://luisvilarbarbosa.github.io/';
	const github_repos = [
		'Camolas/SINF',
		'Evenilink/FEUP-TDIN',
		'LuisVilarBarbosa/AIAD',
		'LuisVilarBarbosa/COMP',
		//'LuisVilarBarbosa/CalamityFinder-Java',
		'LuisVilarBarbosa/Curriculum-Vitae',
		'LuisVilarBarbosa/DISS',
		'LuisVilarBarbosa/FEUP-CMOV-Some-Problems',
		'LuisVilarBarbosa/FilesStructureAnalyser',
		'LuisVilarBarbosa/IART',
		'LuisVilarBarbosa/LAIG',
		'LuisVilarBarbosa/LGP-Beyond-Sight-Server',
		'LuisVilarBarbosa/LTW-Project',
		'LuisVilarBarbosa/LuisVilarBarbosa.github.io',
		'LuisVilarBarbosa/MFES',
		'LuisVilarBarbosa/MyPersonalWebpage',
		'LuisVilarBarbosa/NetworkJammer',
		'LuisVilarBarbosa/PLOG',
		'LuisVilarBarbosa/ParkLayoutSimulator',
		'LuisVilarBarbosa/RCOM',
		'LuisVilarBarbosa/SDIS1',
		'LuisVilarBarbosa/SDIS2-Network-manager',
		'LuisVilarBarbosa/SSIN',
		'LuisVilarBarbosa/Scripts',
		'LuisVilarBarbosa/Terasology',
		'LuisVilarBarbosa/TextCategorizer',
		'LuisVilarBarbosa/dhcp-and-dns-server',
		'LuisVilarBarbosa/openvpn-server',
		//'MartaTorgal/SRSI',
		//'PauloSantos13/LBAW1656',
		//'PauloSantos13/LPOO-Pacman',
		'PauloSantos13/android',
		'centeio/BlackDices-LCOM',
		//'killghost15/LGP-Beyond-Sight-Extension',
		//'lazarocosta/FEUP_CMOV',
	];
	let github_repos_links = {}
	for (const full_name of github_repos) {
		url = 'https://github.com/' + full_name;
		github_repos_links[full_name] = url;
	}
	res.render('index', {
		github: github_link,
		github_webpage: github_webpage_link,
		github_repos: github_repos_links
	});
});

module.exports = router;
