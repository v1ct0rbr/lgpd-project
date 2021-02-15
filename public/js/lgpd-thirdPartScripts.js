(() => {
	const allowedScripts = JSON.parse(localStorage.acceptedLocalData);

	const runFunctionalityScripts = () => {
		console.log('executando scripts de funcionalidade');
		//Your code here
	};

	const runPublicityScripts = () => {
		console.log('executando scripts de publicidade');
		//Your code here
	};

	const runPerformanceScripts = () => {
		console.log('executando scripts de desempenho');
		//Your code here

		// =================== Exemplo ========================
		(function (i, s, o, g, r, a, m) {
			i['GoogleAnalyticsObject'] = r;
			(i[r] =
				i[r] ||
				function () {
					(i[r].q = i[r].q || []).push(arguments);
				}),
				(i[r].l = 1 * new Date());
			(a = s.createElement(o)), (m = s.getElementsByTagName(o)[0]);
			a.async = 1;
			a.src = g;
			m.parentNode.insertBefore(a, m);
		})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

		//coloque seu código do analytics aqui
		ga('create', 'UA-XXXXX-Y', 'auto');
		ga('send', 'pageview');

		console.log('scripts de desempenho executados');
	};

	const runSocialScripts = () => {
		console.log('executando scripts de redes sociais');
		//Your code here
	};

	const runScripts = () => {
		if (allowedScripts.functionality == 'accepted') {
			runFunctionalityScripts();
		}
		if (allowedScripts.publicity == 'accepted') {
			runPublicityScripts();
		}
		if (allowedScripts.performance == 'accepted') {
			runPerformanceScripts();
		}
		if (allowedScripts.social == 'accepted') {
			runSocialScripts();
		}
	};

	runScripts();
})();
