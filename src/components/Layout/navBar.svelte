<script lang="ts">
	import type { LayoutData } from '../../routes/$types';

	export let data: LayoutData;
</script>

<nav>
	<ul />
	<ul>
		{#each data.menus as menu (menu.id)}
			<li>
				<a href="/{menu.menuUrl}" class="contrast">
					<u>
						{menu.menuName}
					</u>
				</a>
			</li>
		{/each}
	</ul>
</nav>
