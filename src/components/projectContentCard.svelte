<script lang="ts">
	import { imageStoreUrl } from '$lib/constants';
	import type { IMoreAboutContent } from '$lib/interfaces/iMenu';

	export let data: IMoreAboutContent[];
</script>

<div class="flex flex-col mx-auto p-4">
	{#each data as moreContent, i}
		{#if i % 2 == 0}
			<div class="card lg:card-side bg-base-200 shadow-xl mb-4">
				<figure>
					<img
						src="{imageStoreUrl}/{moreContent.id}/{moreContent.image}"
						alt={moreContent.projectName}
					/>
				</figure>
				<div class="card-body">
					<h2 class="card-title text-info">{moreContent.projectName}</h2>
					<p>{moreContent.description}</p>
					<div class="card-actions justify-end">
						<a class="btn btn-secondary" href={moreContent.url}>Github</a>
					</div>
				</div>
			</div>
		{:else}
			<div class="card lg:card-side bg-base-200 shadow-xl mb-4">
				<div class="card-body">
					<h2 class="card-title text-info">{moreContent.projectName}</h2>
					<p>{moreContent.description}</p>
					<div class="card-actions justify-end">
						<a class="btn btn-secondary" href={moreContent.url}>Github</a>
					</div>
				</div>
				<figure>
					<img
						src="{imageStoreUrl}/{moreContent.id}/{moreContent.image}"
						alt={moreContent.projectName}
					/>
				</figure>
			</div>
		{/if}
	{:else}
		<h1>There is nothing here, ups!</h1>
	{/each}
</div>
