//const localStorage = require('node-localstorage');
const { company } = require('../config/parameters');

exports.getIndex = (req, res, next) => {
	res.render('index', {
		pageTitle: 'HomePage',
	});
};

exports.getPrivacyPolicy = (req, res, next) => {
	res.render('privacy-policy', {
		pageTitle: 'Privacy Policy',
		company,
	});
};

exports.getTermOfUse = (req, res, next) => {
	res.render('terms-of-use', {
		pageTitle: 'Termos de Uso',
		company,
	});
};
