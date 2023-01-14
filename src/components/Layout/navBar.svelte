<script lang="ts">
	import type { LayoutData } from '../../routes/$types';

	export let data: LayoutData;
</script>

<nav>
	<ul>
	</ul>
	<ul>
		{#each data.menus as menu (menu.id)}
			<li><a href="/{menu.menuUrl}">{menu.menuName}</a></li>
		{/each}
	</ul>
</nav>
