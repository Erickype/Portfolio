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
					</div>
					<footer>
						<a href={moreContent.url} role="button">Github</a>
					</footer>
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
					</div>
					<footer>
						<a href={moreContent.url} role="button">Github</a>
					</footer>
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
		position: relative;
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
		height: 150px;
		padding: 1em;
	}
	footer {
		margin: 0;
		padding: 0.5em;
		text-align: center;
		position: absolute;
		bottom: 0;
		width: 100%;
	}
</style>
