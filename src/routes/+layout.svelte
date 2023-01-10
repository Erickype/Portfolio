<script lang="ts">
	import '../app.css';
	import type { LayoutData } from './$types';
	import SideBar from '../components/Layout/sideBar.svelte';
	import NavBar from '../components/Layout/navBar.svelte';
	import Footer from '../components/Layout/footer.svelte';

	export let data: LayoutData;
</script>

<div class="flex flex-col h-screen">
	<NavBar {data}></NavBar>

	<div class="flex flex-row flex-grow overflow-y-hidden">
		<SideBar></SideBar>
		<div class="overflow-y-auto w-full">
			<slot />
		</div>
	</div>

	<Footer></Footer>
</div>
