<script lang="ts">
	import { authClient } from '$lib/authClient';
	import { goto } from '$app/navigation';
	let email = '';
	let password = '';

	async function handleSubmit() {
		const { error } = await authClient.signIn.email({
			email,
			password
		});

		if (error) {
			console.error(error);
		} else {
			goto('/articles');
		}
	}
</script>

<div class="flex h-screen items-center justify-center bg-gray-50">
	<div class="flex w-full flex-col items-center justify-center">
		<form
			on:submit|preventDefault={handleSubmit}
			class="w-full max-w-md rounded-lg bg-white p-8 shadow-md"
		>
			<h2 class="mb-6 text-center text-2xl font-bold">Login</h2>

			<div class="mb-4">
				<input
					type="email"
					id="email"
					bind:value={email}
					required
					placeholder="Enter your email"
					class="w-full rounded-md border border-gray-300 p-2 text-base focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
				/>
			</div>

			<div class="mb-4">
				<input
					type="password"
					id="password"
					bind:value={password}
					required
					placeholder="Enter your password"
					class="w-full rounded-md border border-gray-300 p-2 text-base focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
				/>
			</div>

			<button
				type="submit"
				class="w-full rounded-md bg-blue-600 px-4 py-2 text-white transition duration-300 hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
			>
				Login
			</button>
		</form>
		<p class="mt-4 text-center text-sm text-gray-600">
			Don't have an account?
			<a href="/signup" class="font-medium text-blue-600 hover:text-blue-500">Sign Up</a>
		</p>
	</div>
</div>
