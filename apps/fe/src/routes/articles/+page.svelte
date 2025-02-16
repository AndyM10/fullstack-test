<script lang="ts">
	import { PUBLIC_API_URL } from '$env/static/public';
	let currentPage = $state(1);

	let { data } = $props();
	let { articles } = $state(data);

	const paginate = async (page: number) => {
		currentPage = page;
		const response = await fetch(`${PUBLIC_API_URL}/articles?page=${page}`);
		const data = await response.json();
		articles = data;
	};
</script>

<div>
	<div class="flex flex-row items-center justify-center gap-4 pt-4">
		<button
			class="rounded-md bg-gray-200 px-4 py-2 hover:bg-gray-300"
			onclick={() => paginate(currentPage - 1)}>Previous</button
		>
		<span>Page {currentPage}</span>
		<button
			class="rounded-md bg-gray-200 px-4 py-2 hover:bg-gray-300"
			onclick={() => paginate(currentPage + 1)}>Next</button
		>
	</div>
	<div class="flex flex-col gap-4 p-4">
		{#each articles as article}
			<a href={`/article/${article.slug}`}>
				<article
					class="group bg-card text-card-foreground flex flex-col overflow-hidden rounded-lg border shadow-sm transition-shadow hover:shadow-md sm:flex-row"
				>
					<div class="relative aspect-[16/9] sm:w-[300px]">
						<img
							src={`https://cdn.tellimer.com/users/${article.image}`}
							alt={article.title}
							class="object-cover transition-transform duration-300 group-hover:scale-105"
						/>
					</div>
					<div class="flex flex-1 flex-col justify-between p-4 sm:p-6">
						<div>
							<div class="mb-4 flex items-center justify-between">
								<span
									class="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800"
								>
									{article.content_type.name}
								</span>
								<time class="text-muted-foreground text-sm">{article.published_at}</time>
							</div>
							<h2 class="mb-2 text-2xl font-semibold tracking-tight">{article.title}</h2>
							<p class="text-muted-foreground mb-4">{article.summary}</p>
						</div>
						<div class="flex items-center gap-2">
							{#each article.analysts as analyst}
								<div class="flex items-center gap-2">
									{#if analyst.picture !== null}
										<img
											src={`https://cdn.tellimer.com/users/${analyst.picture}`}
											alt={`${analyst.first_name} ${analyst.last_name}`}
											class="h-8 w-8 rounded-full object-cover"
											title={`${analyst.first_name} ${analyst.last_name}`}
										/>
									{/if}
									<p class="text-sm font-medium text-gray-700">
										{analyst.first_name}
										{analyst.last_name}
									</p>
								</div>
							{/each}
						</div>
					</div>
				</article>
			</a>
		{/each}
	</div>
</div>
