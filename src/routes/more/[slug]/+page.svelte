<script lang="ts">
	import type { PageData } from './$types';
	import { page } from '$app/stores';
	import ProjectsContent from "../../../components/projectContentCard.svelte";

	export let data: PageData;
</script>

<h3>{$page.params.slug} Projects</h3>

<ProjectsContent data = {data.moreAboutContent}></ProjectsContent>
