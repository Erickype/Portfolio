<script lang="ts">
	import "../app.pcss";
    import "../app.pcss";

    let title = "Erick Carrasco";
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<main class="container bg-background">
	<section>
		<slot></slot>
	</section>
</main>
