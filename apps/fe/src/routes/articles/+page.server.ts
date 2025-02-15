import type { PageServerLoad } from './$types';
import { API_URL } from '$env/static/private';
import type { Article } from '../../../../api/src/types';

export const load: PageServerLoad = async ({ locals, url }) => {
	const articles = (await fetch(`${API_URL}/articles`).then((res) => res.json())) as Article[];
	return {
		articles
	};
};
