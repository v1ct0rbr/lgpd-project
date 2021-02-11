const company = {
	name: 'Minha empresa',
	email: 'email@minhaempresa.com.br',
	website: 'https://minhaempresa.com.br',
};

const termsOfUse = {
	hasUserAccounts: true,
};

const mailContact = {
	host: 'webmail.minhaempresa.com.br',
	service: '123.123.123.123',
	port: 587,
	secure: true,
	auth: {
		user: 'seuEmail@email.com',
		pass: 'suaSenha',
	},
};

module.exports = {
	company,
	termsOfUse,
	mailContact,
};
