<script lang="ts">
	import '@picocss/pico';
	import type { LayoutData } from './$types';
	import NavBar from '../components/Layout/navBar.svelte';
	import Footer from '../components/Layout/footer.svelte';

	export let data: LayoutData;
</script>

<main class="container">
	<NavBar {data} />
	<section>
		<slot />
	</section>
	<Footer />
</main>
