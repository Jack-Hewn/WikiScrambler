import wiki from 'wikipedia';
import { generate, count } from 'random-words';

(async () => {
	try {
		const searchResults = await wiki.search(generate());
		console.log('First' + searchResults);
		//Response of type @wikiSearchResult - contains results and optionally a suggestion
	} catch (error) {
		console.log(error);
		//=> Typeof wikiError
	}
})();
