<script lang="ts">
	import CodeBrakets from "$lib/assets/codeBrakets.gif";
	import SocialNetwork from "../util/socialNetwork.svelte";
</script>

<footer class="bg-background px-6 py-10 lg:px-40 lg:py-12">
	<div class="flex justify-between items-center">
		<div class="flex items-center gap-2">
			<img class="w-10 h-10" src={CodeBrakets} alt="logo" />
			<h4 class="text-2xl font-semibold">Erick Carrasco</h4>
		</div>
		<div class="flex gap-2 items-center">
			<SocialNetwork buttonVariant={"ghost"}></SocialNetwork>
			<a
				class="text-muted-foreground transition-colors hover:text-foreground"
				href="mailto:erickype@hotmail.com">erickype@hotmail.com</a
			>
		</div>
	</div>
	<div class="flex mt-6 gap-6 justify-center items-center pt-6">
		<a
			class="text-muted-foreground font-semibold transition-colors hover:text-foreground"
			href="/">Home</a
		>
		<a
			class="text-muted-foreground font-semibold transition-colors hover:text-foreground"
			href="/projects">Projects</a
		>
		<a
			class="text-muted-foreground font-semibold transition-colors hover:text-foreground"
			href="/about">About me</a
		>
	</div>
</footer>
