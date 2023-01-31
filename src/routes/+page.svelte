<script lang="ts">
	import { base } from '$app/paths';
	import type { PageServerData } from './$types';

	export let data: PageServerData;
</script>

<div class="grid">
	<h1>
		<p>
			Hello, <br />
			I'm Erick <br />
			Software Engineer
		</p>
	</h1>
	<img
		src="{base}/profile.jpeg"
		alt="portrait"
	/>
</div>

<kbd>Principal skills</kbd>

<div class="grid">
	{#each data.contents as content (content.id)}
		<article id="article">
			<div id="content">
				<h5>
					{content.titleContent}
				</h5>
				<p>
					{content.bodyContent}
				</p>
			</div>
			<footer>
				<a href="{base}/more/{content.titleContent}" role="button" class="moreButton">
					<small>
						{content.actionContent}
					</small>
				</a>
			</footer>
		</article>
	{/each}
</div>

<style>
	#content{
		height: 100%;
		max-height: 150px;
	}
	.moreButton{
		width: 100%;
	}
	img {
		margin: auto;
		width: 150px;
		height: 150px;
	}
	kbd{
		margin-top: 20px;
	}
	h1{
		margin-bottom: 0px;
	}
</style>
