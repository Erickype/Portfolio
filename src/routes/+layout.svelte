<script lang="ts">
	import '../app.css';
	import type { LayoutData } from './$types';

	export let data: LayoutData;
</script>

<nav class="menus">
	{#each data.posts as menu (menu.id)}
		<button class="bg-slate-300 hover:bg-slate-500 font-medium">
			<a href="/{menu.menuUrl}">{menu.menuName}</a>
		</button>
	{/each}
</nav>

<slot />
