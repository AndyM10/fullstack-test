<script lang="ts">
	import { goto } from '$app/navigation';

	let { data } = $props();

	let { article, session } = data;
</script>

<article class="container mx-auto px-4 py-8">
	<div class="mb-8">
		<div class="mb-4 flex items-center gap-2">
			<span
				class="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800"
			>
				{article.content_type.name}
			</span>
			<time class="text-muted-foreground text-sm">{article.published_at}</time>
		</div>
		<h1 class="mb-6 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">{article.title}</h1>
		<div class="flex items-center gap-4">
			{#each data.article.analysts as analyst}
				<div class="flex items-center gap-2">
					{#if analyst.picture !== null}
						<img
							src={`https://cdn.tellimer.com/users/${analyst.picture}`}
							alt={`${analyst.first_name} ${analyst.last_name}`}
							class="h-8 w-8 rounded-full object-cover"
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

	{#if session}
		<div class="content">
			{@html article.content}
		</div>
	{:else}
		<div class="h-[100vh] w-full rounded bg-gray-300 opacity-50">
			<div class="flex h-full flex-col items-center justify-center">
				<button
					class="mx-auto block rounded bg-blue-500 px-4 py-2 text-white"
					onclick={() => goto('/login')}
				>
					Login to view this article
				</button>
			</div>
		</div>
	{/if}
</article>
