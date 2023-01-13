<script lang="ts">
	import type { LayoutData } from '../../routes/$types';

	export let data: LayoutData;
</script>

<div>
	<nav>
		<a href="/">Email</a>
	</nav>
	<nav>
		{#each data.menus as menu (menu.id)}
			<a href="/{menu.menuUrl}">{menu.menuName}</a>
		{/each}
	</nav>
</div>
