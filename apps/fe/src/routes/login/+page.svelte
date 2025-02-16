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

<div class="flex h-screen items-center justify-center">
	<form
		on:submit|preventDefault={handleSubmit}
		class="w-full max-w-md rounded-lg bg-white p-8 shadow-md"
	>
		<h1 class="mb-8 text-center">Login</h1>

		<div class="mb-4">
			<label for="email" class="mb-2 block">Email</label>
			<input
				type="email"
				id="email"
				bind:value={email}
				required
				placeholder="Enter your email"
				class="w-full rounded-md border border-gray-300 p-2 text-base"
			/>
		</div>

		<div class="mb-4">
			<label for="password" class="mb-2 block">Password</label>
			<input
				type="password"
				id="password"
				bind:value={password}
				required
				placeholder="Enter your password"
				class="w-full rounded-md border border-gray-300 p-2 text-base"
			/>
		</div>

		<button
			type="submit"
			class="mt-4 w-full cursor-pointer rounded-md border-none bg-green-500 py-3 text-base text-white hover:bg-green-600"
			>Log in</button
		>
	</form>
</div>
