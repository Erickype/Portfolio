<script lang="ts">
	import SideBar from "$lib/components/Layout/sideBar.svelte";
	import type { PageServerData } from "./$types";

	export let data: PageServerData;
	const experiences = data.experiences;
</script>

<div class="flex flex-col items-center text-center">
	<h3 class="text-xl lg:text-3xl text-primary font-semibold">
		Erick Josué Carrasco Santos
	</h3>
	<p class="text-md lg:text-md font-semibold">Software Engineer</p>
</div>

<div class="relative w-full p-2">
	<div class="absolute right-5 top-5">
		<SideBar />
	</div>
	<div class="pb-4">
		<h3 class="text-xl lg:text-2xl font-bold pb-2">Education</h3>
		<div class="mb-2">
			<h4 class="text-md text-primary font-semibold">
				Bachelor's in Software Engineering
			</h4>
			<h5 class="text-sm italic font-thin">
				Universidad Técnica de Ambato
			</h5>
		</div>
	</div>
	<div class="flex flex-col">
		<h3 class="text-xl lg:text-2xl font-bold pb-2">Experience</h3>
		<div class="grid lg:grid-cols-2 gap-4">
			{#each experiences as experience}
				<div class="mb-2">
					<div class="mb-2">
						<h3
							class="text-base lg:text-lg font-semibold border-b text-primary"
						>
							{experience.company}
						</h3>
						<h4 class="text-sm lg:text-md font-thin mt-2 italic">
							{`${experience.project} (${experience.jobTitle})`}
						</h4>
					</div>
					<ul
						class="text-sm lg:text-md text-pretty my-6 ml-6 list-disc [&>li]:mt-2"
					>
						{#each experience.activities as activity}
							<li>{activity}</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>
	</div>
</div>
