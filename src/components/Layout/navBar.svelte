<script lang="ts">
	import type { LayoutData } from '../../routes/$types';

	export let data: LayoutData;
</script>

<nav>
	<ul />
	<ul>
		{#each data.menus as menu (menu.id)}
			<li>
				<a href="/{menu.menuUrl}" role="button">
						{menu.menuName}
				</a>
			</li>
		{/each}
	</ul>
</nav>

<style>
	nav{
		padding-right: 2em;
		background-color: var(--primary);
		margin-bottom: 1em;
	}
</style>
