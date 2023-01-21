<script lang="ts">
	import { imageStoreUrl } from "$lib/constants";
	import type { IMoreAboutContent } from "$lib/interfaces/iMenu";

    export let data: IMoreAboutContent[]
</script>

{#each data as moreContent, i}
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
{:else}
	<h1>There is nothing here, ups!</h1>
{/each}

<style>
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