import wiki from 'wikipedia';
import { generate, count } from 'random-words';
import fetch from 'node-fetch';

(async () => {
	try {
		const searchResults = await wiki.search(generate());
		let fetch = await import('node-fetch')
		console.log(searchResults);
		//Response of type @wikiSearchResult - contains results and optionally a suggestion
	} catch (error) {
		console.log(error);
		//=> Typeof wikiError
	}
})();
