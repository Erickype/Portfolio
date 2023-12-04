<script lang="ts">
	import { base } from '$app/paths';
	import type { LayoutData } from '../../routes/$types';

	export let data: LayoutData;
</script>

<nav class="navbar bg-base-100">
	<div class="flex-1">
		<a class="btn btn-ghost text-xl" href="{base}/"> Erick's </a>
	</div>
	<div class="flex-none">
		<ul class="menu menu-horizontal px-4">
			{#each data.menus as menu (menu.id)}
				{#if menu.menuUrl != ''}
					<li>
						<a href="{base}/{menu.menuUrl}" role="button">
							{menu.menuName}
						</a>
					</li>
				{/if}
			{/each}
		</ul>
	</div>
</nav>
