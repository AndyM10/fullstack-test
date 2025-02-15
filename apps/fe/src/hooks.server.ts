import type { Handle } from '@sveltejs/kit';
import { auth } from './lib/auth';
import { svelteKitHandler } from 'better-auth/svelte-kit';
export const handle: Handle = async ({ event, resolve }) => {
	// Get the session
	const session = await auth.api.getSession({
		headers: event.request.headers
	});

	//Add user and session to locals
	if (session) {
		event.locals.user = session.user;
		event.locals.session = session.session;
	}

	return svelteKitHandler({ event, resolve, auth });
};
