<script lang="ts">
	import { onMount } from 'svelte';
	let articles: any[] = [];
	let currentPage = 1;
	const articlesPerPage = 5;

	onMount(async () => {
		const response = await fetch('/api/articles'); // Adjust the API endpoint as needed
		articles = await response.json();
	});

	function paginate(array: any[], page_size: number, page_number: number) {
		return array.slice((page_number - 1) * page_size, page_number * page_size);
	}

	$: paginatedArticles = paginate(articles, articlesPerPage, currentPage);
</script>

<div>
	{#each paginatedArticles as article}
		<div class="article">
			<h2>{article.title}</h2>
			<p>{article.content}</p>
		</div>
	{/each}

	<div class="pagination">
		<button on:click={() => (currentPage = Math.max(currentPage - 1, 1))}>Previous</button>
		<span>Page {currentPage}</span>
		<button
			on:click={() =>
				(currentPage = Math.min(currentPage + 1, Math.ceil(articles.length / articlesPerPage)))}
			>Next</button
		>
	</div>
</div>
