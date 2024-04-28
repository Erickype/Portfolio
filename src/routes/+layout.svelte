<script lang="ts">
	import "../app.pcss";

	import { ModeWatcher } from "mode-watcher";

	let title = "Erick Carrasco";
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<ModeWatcher/>

<main class="container bg-background">
	<section>
		<slot></slot>
	</section>
</main>
