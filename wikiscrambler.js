import wiki from 'wikipedia';
import { generate, count } from 'random-words';

(async () => {
	try {
		const searchResults = await wiki.search(generate());
		console.log('Starting point:')
		console.log(searchResults);
		//Response of type @wikiSearchResult - contains results and optionally a suggestion
	} catch (error) {
		console.log(error);
		//=> Typeof wikiError
	}
})();

(async () => {
await new Promise(resolve => setTimeout(resolve, 500));
})();

(async () => {
	try {
		const searchResults = await wiki.search(generate());
		console.log('Destination:')
		console.log(searchResults);
		//Response of type @wikiSearchResult - contains results and optionally a suggestion
	} catch (error) {
		console.log(error);
		//=> Typeof wikiError
	}
})();
