<script lang="ts">
	import { base } from '$app/paths';
	import type { PageServerData } from './$types';
	import { onMount } from 'svelte';

	export let data: PageServerData;

	let projectsSection: HTMLElement | null;

	function scrollToLowerSection() {
		projectsSection!.scrollIntoView({ behavior: 'smooth' });
	}

	onMount(() => {
		projectsSection = document.getElementById('projectsSection');
	});
</script>

<div class="hero min-h-screen">
	<div class="hero-content flex-col lg:flex-row-reverse">
		<div>
			<h1 class="text-5xl font-bold">Hi, I'm Erick software engineer</h1>
			<p class="py-6">
				I'm a young tech enthusiast excited to join a team of passionate individuals for an engaging
				project.
			</p>
			<button class="btn btn-primary" on:click={scrollToLowerSection}>More</button>
		</div>
	</div>
</div>


<div id="projectsSection" class="min-h-screen">
	<kbd>Principal skills</kbd>
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
