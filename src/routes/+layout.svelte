<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	import { pb } from '../lib/pocketbase';

	let menus: any = [];

	onMount(async () => {
		const menusList = pb.collection('menus').getList();

		menus = (await menusList).items;
	});
</script>

<nav class="menus">
	{#each menus as menu (menu.id)}
		<button class="bg-slate-300 hover:bg-slate-500 font-medium">
			<a href="/{menu.menuUrl}">{menu.menuName}</a>
		</button>
	{/each}
</nav>

<slot />
