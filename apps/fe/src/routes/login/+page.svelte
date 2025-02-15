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

<div class="container">
	<form on:submit|preventDefault={handleSubmit} class="login-form">
		<h1>Login</h1>

		<div class="form-group">
			<label for="email">Email</label>
			<input type="email" id="email" bind:value={email} required placeholder="Enter your email" />
		</div>

		<div class="form-group">
			<label for="password">Password</label>
			<input
				type="password"
				id="password"
				bind:value={password}
				required
				placeholder="Enter your password"
			/>
		</div>

		<button type="submit">Log in</button>
	</form>
</div>

<style>
	.container {
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.login-form {
		background: white;
		padding: 2rem;
		border-radius: 8px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		width: 100%;
		max-width: 400px;
	}

	h1 {
		text-align: center;
		margin-bottom: 2rem;
	}

	.form-group {
		margin-bottom: 1rem;
	}

	label {
		display: block;
		margin-bottom: 0.5rem;
	}

	input {
		width: 100%;
		padding: 0.5rem;
		border: 1px solid #ddd;
		border-radius: 4px;
		font-size: 1rem;
	}

	button {
		width: 100%;
		padding: 0.75rem;
		background-color: #4caf50;
		color: white;
		border: none;
		border-radius: 4px;
		font-size: 1rem;
		cursor: pointer;
		margin-top: 1rem;
	}

	button:hover {
		background-color: #45a049;
	}
</style>
