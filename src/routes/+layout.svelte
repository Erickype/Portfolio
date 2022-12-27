<script lang="ts">
	import '../app.css';
	import type { LayoutData } from './$types';

	export let data: LayoutData;
</script>

<div class="">
	<nav class="flex justify-center space-x-4">
		{#each data.posts as menu (menu.id)}
			<a
				href="/{menu.menuUrl}"
				class="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-200 hover:text-slate-900 active:bg-slate-300"
				>{menu.menuName}</a
			>
		{/each}
	</nav>
</div>

<slot />
