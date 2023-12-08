<script lang="ts">
	import type { PageData } from './$types';
	import { page } from '$app/stores';
	import ProjectsContent from '../../../components/projectContentCard.svelte';

	export let data: PageData;
</script>

<div class="flex flex-col items-center p-4">
	<h1 class="text-4xl font-bold text-primary">{$page.params.slug} Projects</h1>	
	<ProjectsContent data={data.moreAboutContent} />
</div>