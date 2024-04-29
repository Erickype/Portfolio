<script lang="ts">
	import Hero from "$lib/components/Home/hero.svelte";
	import Experience from "$lib/components/Home/experience.svelte";
	import type { PageServerData } from "./$types";

	export let data: PageServerData;
	const experiences = data.experiences;
</script>

<Hero></Hero>

<Experience {experiences}></Experience>
