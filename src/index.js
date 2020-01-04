import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import Fetch from './Fetch';
import * as serviceWorker from './serviceWorker';

const url = {
	cocktails: `https://api.jsonbin.io/b/5e0f4b9536e70a49dc66bb8e/1`,
	content: ``
};

(async () => {

	try {
		const cocktails = await Fetch.get({ url: url.cocktails });
		ReactDOM.render(<App {...{ cocktails }}/>, document.getElementById('cocktail-bar'));
	} catch (err) {
		console.error(`Ow Sh**!! Issue with rendering due to `, err);
	}
})();

serviceWorker.unregister();
