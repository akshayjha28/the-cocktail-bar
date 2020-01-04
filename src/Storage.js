
class Storage {

	static get(key) {
		let result = {};

		if (localStorage.getItem(key)) {
			result = JSON.parse(localStorage.getItem(key));
		}
		return result;
	}

	static set(key) {
		let result = {};

		if (localStorage.getItem(key)) {
			result = JSON.parse(localStorage.getItem(key));
		}
		return result;
	}
}

export default Storage