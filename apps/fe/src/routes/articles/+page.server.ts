import type { PageServerLoad } from './$types';
import { PUBLIC_API_URL } from '$env/static/public';
import type { Article } from '../../../../api/src/types';

export const load: PageServerLoad = async ({ locals, url }) => {
	const articles = (await fetch(`${PUBLIC_API_URL}/articles`).then((res) =>
		res.json()
	)) as Article[];
	return {
		articles
	};
};
