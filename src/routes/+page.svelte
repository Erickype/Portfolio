<script lang="ts">
	import Hero from "$lib/components/Home/hero.svelte";
	import Experience from "$lib/components/Home/experience.svelte";
</script>

<Hero></Hero>

<Experience></Experience>

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
