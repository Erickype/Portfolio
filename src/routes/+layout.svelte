<script lang="ts">
	import '../app.css';
	import type { LayoutData } from './$types';

	export let data: LayoutData;
</script>

<div class="h-screen max-h-screen static overflow-hidden">
	<div class="bg-darkBlue columns-2">
		<nav class="flex justify-start">
			<a
				href="/"
				class="rounded-lg px-3 py-2 text-white font-medium hover:bg-green hover:text-blue active:bg-skyBlue"
				>Email</a
			>
		</nav>
		<nav class="flex justify-end space-x-4">
			{#each data.posts as menu (menu.id)}
				<a
					href="/{menu.menuUrl}"
					class="rounded-lg px-3 py-2 text-white font-medium hover:bg-green hover:text-blue active:bg-skyBlue"
					>{menu.menuName}</a
				>
			{/each}
		</nav>
	</div>

	<slot />

	<div class="bg-darkBlue w-screen absolute bottom-0">
		<footer class="text-white text-center font-semibold text-lg">
			<a href="/">Footer</a>
		</footer>
	</div>
</div>
