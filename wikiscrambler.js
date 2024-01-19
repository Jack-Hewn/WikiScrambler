import wiki from 'wikipedia';
import { generate, count } from 'random-words';
import fetch from 'node-fetch';

console.log(generate());

(async () => {
	try {
		const searchResults = await wiki.search(generate());
		let fetch = await import('node-fetch')
		console.log(searchResults);
		//Response of type @wikiSearchResult - contains results and optionally a suggestion
		const newUrl = await wiki.setLang('en');
		console.log(newUrl);
		//Returns the api url with language changed - use `languages()` method to see a list of available langs
	} catch (error) {
		console.log(error);
		//=> Typeof wikiError
	}
})();
