<script lang="ts">
	import '../app.css';
	import '@picocss/pico';
	import type { LayoutData } from './$types';
	import SideBar from '../components/Layout/sideBar.svelte';
	import NavBar from '../components/Layout/navBar.svelte';
	import Footer from '../components/Layout/footer.svelte';

	export let data: LayoutData;
</script>

<main class="container">
	<NavBar {data} />
	<section>
		<slot />
	</section>
	<section>
		<Footer />
	</section>
</main>
