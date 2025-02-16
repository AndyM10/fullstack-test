<script lang="ts">
	import { goto } from '$app/navigation';
	import { authClient } from '$lib/authClient';
	let email = '';
	let password = '';
	let name = '';
	async function handleSubmit() {
		const { data, error } = await authClient.signUp.email({
			email: email,
			password: password,
			name: name
		});
		if (error) {
			console.error(error);
		}
		//If successfull redirect to /articles
		if (data) {
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
			<h2 class="mb-6 text-center text-2xl font-bold">Sign Up</h2>

			<div class="mb-4">
				<input
					type="email"
					placeholder="Email"
					bind:value={email}
					required
					class="w-full rounded-md border border-gray-300 p-2 text-base focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
				/>
			</div>

			<div class="mb-4">
				<input
					type="password"
					placeholder="Password"
					bind:value={password}
					required
					class="w-full rounded-md border border-gray-300 p-2 text-base focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
				/>
			</div>

			<div class="mb-6">
				<input
					type="text"
					placeholder="Name"
					bind:value={name}
					required
					class="w-full rounded-md border border-gray-300 p-2 text-base focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
				/>
			</div>

			<button
				type="submit"
				class="w-full rounded-md bg-blue-600 px-4 py-2 text-white transition duration-300 hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
			>
				Sign Up
			</button>
		</form>

		<p class="mt-4 text-center text-sm text-gray-600">
			Already have an account?
			<a href="/login" class="font-medium text-blue-600 hover:text-blue-500">Login</a>
		</p>
	</div>
</div>
