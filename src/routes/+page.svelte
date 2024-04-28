<script lang="ts">
	import { onMount } from "svelte";
	import CodeBrakets from "$lib/assets/codeBrakets.gif";

	let projectsSection: HTMLElement | null;

	function scrollToLowerSection() {
		projectsSection!.scrollIntoView({ behavior: "smooth" });
	}

	onMount(() => {
		projectsSection = document.getElementById("projectsSection");
	});
</script>

<!-- <div class="hero min-h-screen pr-16 pl-16">
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
</div> -->

<div class="flex justify-center items-center gap-6 min-h-fit h-[80vh]">
	<h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
		<div class="flex items-center gap-2 mb-2">
			<p>
				Hi!, I'm
				<br />
				<span class="text-primary">Erick Carrasco</span>
			</p>
			<img class="w-14 h-14" src={CodeBrakets} alt="Code brakets gif" />
		</div>
		<code
			class="relative rounded bg-muted px-2 py-2 font-mono text-xl font-semibold"
		>
			Software Engineer
		</code>
	</h1>
</div>

<!-- <div id="projectsSection" class="flex flex-col items-center min-h-screen">
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
</div> -->
