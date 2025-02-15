<script lang="ts">
	let currentPage = 1;
	const articlesPerPage = 5;

	let { data } = $props();
	let { articles } = data;
</script>

<div>
	{#each articles as article}
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
