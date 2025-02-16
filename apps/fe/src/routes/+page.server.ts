import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	const session = await locals.session;
	if (session) {
		redirect(302, '/articles');
	} else {
		redirect(302, '/signup');
	}
};
