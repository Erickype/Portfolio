<script lang="ts">
	import '@picocss/pico';
	import '../app.css'

	import type { LayoutData } from './$types';
	import NavBar from '../components/Layout/navBar.svelte';
	import Footer from '../components/Layout/footer.svelte';

	export let data: LayoutData;
</script>

<NavBar {data} />

<main class="container">
	<section>
		<slot />
	</section>
	<Footer />
</main>
