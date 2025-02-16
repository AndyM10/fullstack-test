import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	const session = await locals.session;
	//If the user is logged in, redirect to the articles page
	if (session) {
		redirect(302, '/articles');
	} else {
		//If the user is not logged in, redirect to the signup page
		redirect(302, '/signup');
	}
};
