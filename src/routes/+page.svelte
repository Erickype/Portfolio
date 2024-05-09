<script lang="ts">
	import Hero from "$lib/components/Home/hero.svelte";
	import Experience from "$lib/components/Home/experience.svelte";
	import type { PageServerData } from "./$types";
    import Projects from "$lib/components/Home/projects.svelte";

	export let data: PageServerData;
	const experiences = data.experiences;
	const personalProjects = data.personalProjects
</script>

<Hero></Hero>

<Experience {experiences}></Experience>

<Projects {personalProjects}></Projects>
