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

<div class="hero min-h-screen pr-16 pl-16">
	<div class="hero-content flex-col lg:flex-row-reverse">
		<div>
			<h1 class="text-5xl text-info font-bold">Hi, I'm Erick software engineer</h1>
			<p class="py-6">
				I'm a young software engineer an tech enthusiast with experience in different areas of
				software development. I am also excited to join a team of passionate individuals for an
				engaging project.
			</p>
			<button class="btn btn-primary" on:click={scrollToLowerSection}>About me</button>
		</div>
	</div>
</div>

<div id="projectsSection" class="flex flex-col items-center min-h-screen">
	<h4 class="text-2xl font-bold text-success">Principal skills</h4>
	<div class="lg:flex lg:gap-6 p-6">
		{#each data.contents as content (content.id)}
			<div class="card w-96 bg-base-300 shadow-xl mb-6">
				<div class="card-body">
					<h2 class="card-title text-info">{content.titleContent}</h2>
					<p>{content.bodyContent}</p>
					<div class="card-actions justify-end">
						<a class="btn btn-primary" href="{base}/more/{content.titleContent}">
							{content.actionContent}
						</a>
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>
