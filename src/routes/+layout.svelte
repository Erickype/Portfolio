<script lang="ts">
	import '../app.css';
	import type { LayoutData } from './$types';

	export let data: LayoutData;
</script>

<div class="flex flex-col h-screen">
	<div class="bg-darkBlue columns-2">
		<nav class="flex justify-start">
			<a
				href="/"
				class="rounded-lg px-3 py-2 text-white font-medium hover:bg-green hover:text-blue active:bg-skyBlue"
				>Email</a
			>
		</nav>
		<nav class="flex justify-end space-x-4">
			{#each data.menus as menu (menu.id)}
				<a
					href="/{menu.menuUrl}"
					class="rounded-lg px-3 py-2 text-white font-medium hover:bg-green hover:text-blue active:bg-skyBlue"
					>{menu.menuName}</a
				>
			{/each}
		</nav>
	</div>

	<div class="flex-grow overflow-auto">
		<slot />
	</div>

	<div class="bg-darkBlue w-screen">
		<footer class="text-white text-center font-semibold text-lg">
			<a href="/">Footer</a>
		</footer>
	</div>
</div>
