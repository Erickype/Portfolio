<script lang="ts">
	import '../app.css';
	import type { LayoutData } from './$types';

	export let data: LayoutData;
</script>

<div class="bg-darkBlue">
	<nav class="flex justify-center space-x-4">
		{#each data.posts as menu (menu.id)}
			<a
				href="/{menu.menuUrl}"
				class="rounded-lg px-3 py-2 text-white font-medium hover:bg-green hover:text-blue active:bg-skyBlue"
				>{menu.menuName}</a
			>
		{/each}
	</nav>
</div>

<slot />
