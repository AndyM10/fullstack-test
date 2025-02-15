<script lang="ts">
	import '../app.css';
	import { authClient } from '$lib/authClient';
	import { goto } from '$app/navigation';
	let { children, data } = $props();

	let { session } = data;
</script>

<nav>
	<ul>
		{#if session}
			<li><a href="/articles">Articles</a></li>
			<li>
				<button
					onclick={() =>
						authClient.signOut({
							fetchOptions: {
								onSuccess: () => {
									goto('/');
								}
							}
						})}>Logout</button
				>
			</li>
		{:else}
			<li><a href="/signup">Sign Up</a></li>
		{/if}
	</ul>
</nav>

{@render children()}

<style>
	nav {
		background-color: #f8f9fa; /* Light background color */
		padding: 10px 20px; /* Padding around the navbar */
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Subtle shadow */
	}

	nav ul {
		list-style-type: none; /* Remove bullet points */
		margin: 0; /* Remove default margin */
		padding: 0; /* Remove default padding */
		display: flex; /* Flexbox for horizontal layout */
	}

	nav li {
		margin-right: 20px; /* Space between links */
		transition: color 0.3s; /* Smooth color transition */
	}

	nav a {
		text-decoration: none; /* Remove underline from links */
		color: #007bff; /* Link color */
		font-weight: bold; /* Bold text */
	}

	nav a:hover {
		color: #0056b3; /* Darker color on hover */
	}
</style>
