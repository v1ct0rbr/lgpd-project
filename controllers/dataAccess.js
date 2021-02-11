exports.getDataAccess = (req, res, next) => {
	res.render('data-access', {
		pageTitle: 'Acesso aos Dados',
	});
};
