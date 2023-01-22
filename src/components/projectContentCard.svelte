<script lang="ts">
	import { imageStoreUrl } from '$lib/constants';
	import type { IMoreAboutContent } from '$lib/interfaces/iMenu';

	export let data: IMoreAboutContent[];
</script>

{#each data as moreContent, i}
	<article>
		<div class="grid">
			{#if i % 2 == 0}
				<article class="contentArticle">
					<header>
						<h5>{moreContent.projectName}</h5>
					</header>

					<div id="content">
						<p>{moreContent.description}</p>
						<a href={moreContent.url}>Github</a>
					</div>
				</article>
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
				<article class="contentArticle">
					<header>
						<h5>{moreContent.projectName}</h5>
					</header>

					<div id="content">
						<p>{moreContent.description}</p>
						<a href={moreContent.url}>Github</a>
					</div>
				</article>
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
	.contentArticle {
		margin: 0;
		padding: 0;
	}
	header {
		margin: 0;
		padding: 0;
		text-align: center;
	}
	h5 {
		margin: auto;
		padding: auto;
		padding-top: 0.5em;
		padding-bottom: 0.5em;
	}
	#content {
		height: 85%;
		padding: 1em;
		position: relative;
	}
	a {
		position: absolute;
		bottom: 1em;
		text-align: center;
		margin: auto;
	}
</style>
