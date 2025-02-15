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

<div class="container">
	<form class="form" on:submit|preventDefault={handleSubmit}>
		<h2>Sign Up</h2>
		<div class="input-group">
			<input type="email" placeholder="Email" bind:value={email} required />
		</div>
		<div class="input-group">
			<input type="password" placeholder="Password" bind:value={password} required />
		</div>
		<div class="input-group">
			<input type="text" placeholder="Name" bind:value={name} required />
		</div>
		<button type="submit">Login</button>
	</form>
</div>

<style>
	.container {
		display: flex; /* Use flexbox for centering */
		justify-content: center; /* Center horizontally */
		align-items: center; /* Center vertically */
		height: 100vh; /* Full viewport height */
		background-color: #f8f9fa; /* Light background color */
	}

	.form {
		background: white; /* White background for the form */
		padding: 20px; /* Padding inside the form */
		border-radius: 8px; /* Rounded corners */
		box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Subtle shadow */
		width: 300px; /* Fixed width for the form */
	}

	h2 {
		text-align: center; /* Center the heading */
	}

	.input-group {
		margin-bottom: 15px; /* Space between input fields */
	}

	input {
		width: 100%; /* Full width input */
		padding: 10px; /* Padding inside input */
		border: 1px solid #ccc; /* Border color */
		border-radius: 4px; /* Rounded corners */
	}

	button {
		width: 100%; /* Full width button */
		padding: 10px; /* Padding inside button */
		background-color: #007bff; /* Button color */
		color: white; /* Text color */
		border: none; /* No border */
		border-radius: 4px; /* Rounded corners */
		cursor: pointer; /* Pointer cursor on hover */
		transition: background-color 0.3s; /* Smooth background transition */
	}

	button:hover {
		background-color: #0056b3; /* Darker button color on hover */
	}
</style>
