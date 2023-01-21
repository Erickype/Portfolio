<script lang="ts">
	import { imageStoreUrl } from '$lib/constants';
	import type { PageData } from './$types';
	import { page } from '$app/stores';

	export let data: PageData;
	
</script>

<h3>{$page.params.slug} Projects</h3>

{#each data.moreAboutContent as moreContent, i}
	<main class="container">
		<article>
			<div class="grid">
				{#if i % 2 == 0}
					<div>
						<h4>{moreContent.projectName}</h4>
						<p>{moreContent.description}</p>
						<a href={moreContent.url}>Github</a>
					</div>
					<div class="imageCell">
						<img
							src="{imageStoreUrl}/{moreContent.id}/{moreContent.image}"
							alt={moreContent.projectName}
						/>
					</div>
				{:else}
					<div class="imageCell">
						<img
							src="{imageStoreUrl}/{moreContent.id}/{moreContent.image}"
							alt={moreContent.projectName}
						/>
					</div>
					<div>
						<h4>{moreContent.projectName}</h4>
						<p>{moreContent.description}</p>
						<a href={moreContent.url}>Github</a>
					</div>
				{/if}
			</div>
		</article>
	</main>
{:else}
	<h1>There is nothing here, ups!</h1>
{/each}

<style>
	.container {
		margin-top: 20px;
	}
	.imageCell {
		display: flex;
		align-items: center;
		justify-content: center;
	}
	img {
		margin: auto;
	}
	article {
		padding: 1em;
		margin: 1em;
	}
</style>
