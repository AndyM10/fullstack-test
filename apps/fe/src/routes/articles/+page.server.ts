import type { PageServerLoad } from './$types';
import { PUBLIC_API_URL } from '$env/static/public';
import type { Article } from '../../../../api/src/types';

export const load: PageServerLoad = async ({ url }) => {
	//Parse the page query param from string to number
	//If no page is provided, default to 1
	const page = parseInt(url.searchParams.get('page') || '1');

	//Would like nicer handling of when page goes out of bounds but running out of time
	const articles = (await fetch(`${PUBLIC_API_URL}/articles?page=${page}`).then((res) =>
		res.json()
	)) as Article[];
	return {
		articles,
		page
	};
};
