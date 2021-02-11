const initialState = (val = 'disabled') => {
	return {
		functionality: val,
		performance: val,
		publicity: val,
		social: val,
	};
};

const init = (func) => {
	if (!localStorage.acceptedLocalData) {
		localStorage.setItem('acceptedLocalData', JSON.stringify({ ...initialState }));
		func({ ...initialState });
	} else {
		func(JSON.parse(localStorage.acceptedLocalData));
	}

	if (!localStorage.termsAccepted) {
		document.querySelector('.box-cookies').classList.remove('hide');
	}
};

const countAcceptedLocalData = (result) => {
	let count = 0;
	let localData = JSON.parse(localStorage.acceptedLocalData);
	Object.keys(localData).map((key, idx) => {
		if (localData[key] == 'accepted') count++;
	});
	return count;
};

const changeLocalDataValue = (val, property) => {
	let tempLocalData = JSON.parse(localStorage.acceptedLocalData);
	let accept = val ? 'accepted' : 'disabled';
	let newProp = {};
	newProp[property] = accept;
	let newLocalData = { ...tempLocalData, ...newProp };
	localStorage.setItem('acceptedLocalData', JSON.stringify(newLocalData));
};

const getElementById = (id) => {
	return document.querySelector(`#${id}`);
};

const addEventListenerToList = (event, list, func) => {
	list.forEach((element) => {
		element.addEventListener(event, func);
	});
};

const enableDisableAll = (value) => {
	localStorage.setItem('acceptedLocalData', JSON.stringify(initialState(value)));
	localStorage.setItem('termsAccepted', value);

	const element = document.querySelector('.box-cookies');
	if (!element.classList.contains('hide')) element.classList.add('hide');
};

const checkUncheckAll = (checks, value) => {
	checks.forEach((el, idx) => {
		el.checked = value;
	});
	Object.keys(JSON.parse(localStorage.acceptedLocalData)).map((key, idx) => {
		changeLocalDataValue(value, key);
	});
};
