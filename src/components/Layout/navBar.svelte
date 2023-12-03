<script lang="ts">
	import { base } from '$app/paths';
	import type { LayoutData } from '../../routes/$types';

	export let data: LayoutData;
</script>

<nav class="navbar bg-base-200">
	<ul />
	<ul>
		{#each data.menus as menu (menu.id)}
			<li>
				<a href="{base}/{menu.menuUrl}" role="button">
					{menu.menuName}
				</a>
			</li>
		{/each}
	</ul>
</nav>