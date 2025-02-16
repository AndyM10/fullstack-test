import { PUBLIC_API_URL } from '$env/static/public';
import type { Article } from '../../../../../api/src/types';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const { slug } = params;
	const article = (await fetch(`${PUBLIC_API_URL}/article/${slug}`).then((res) =>
		res.json()
	)) as Article;
	return {
		article
	};
};
