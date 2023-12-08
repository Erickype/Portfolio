<script lang="ts">
	import '../app.css';

	import type { LayoutData } from './$types';
	import NavBar from '../components/Layout/navBar.svelte';
	import Footer from '../components/Layout/footer.svelte';

	export let data: LayoutData;

	let title = 'Erick Carrasco';
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<NavBar {data} />

<main class="container">
	<section>
		<slot />
	</section>
</main>

<Footer />
