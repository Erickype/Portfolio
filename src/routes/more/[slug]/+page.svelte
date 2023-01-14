<script lang="ts">
	import { imageStoreUrl } from '$lib/constants';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

{#each data.moreAboutContent as moreContent (moreContent.id)}
	<h4>{moreContent.projectName}</h4>
	<div>{moreContent.description}</div>
	<img src="{imageStoreUrl}/{moreContent.id}/{moreContent.image}" alt="{moreContent.projectName}">
	<a href="{moreContent.url}">Github</a>
{/each}
