<script lang="ts">
	import "../app.pcss";

	import { ModeWatcher } from "mode-watcher";

	import NavBar from "$lib/components/Layout/navBar.svelte";
	import Footer from "$lib/components/Layout/footer.svelte";

	let title = "Erick Carrasco";
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<ModeWatcher />

<div class="flex min-h-screen w-full flex-col bg-muted/40">
	<NavBar></NavBar>

	<main class="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8 lg:mx-32 h-full">
		<slot></slot>
	</main>

	<Footer></Footer>
</div>
