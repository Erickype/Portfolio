<script lang="ts">
	import CodeBrakets from "$lib/assets/codeBrakets.gif";
	import SocialNetwork from "../util/socialNetwork.svelte";
</script>

<footer class="bg-background px-6 py-10 lg:px-40 lg:py-12">
	<div class="flex flex-col lg:flex-row justify-between items-center">
		<div class="flex items-center gap-2">
			<img class="w-10 h-10" src={CodeBrakets} alt="logo" />
			<h4 class="text-xl lg:text-xl font-semibold">Erick Carrasco</h4>
		</div>
		<div class="flex flex-col lg:flex-row gap-2 items-center">
			<div>
				<SocialNetwork buttonVariant={"ghost"}></SocialNetwork>
			</div>
			<a
				class="text-muted-foreground transition-colors hover:text-foreground"
				href="mailto:erickype@hotmail.com">erickype@hotmail.com</a
			>
		</div>
	</div>
	<div class="flex mt-4 gap-6 justify-center items-center pt-4">
		<a
			class="text-muted-foreground font-semibold transition-colors hover:text-foreground"
			href="/">Home</a
		>
		<!-- 	<a
			class="text-muted-foreground font-semibold transition-colors hover:text-foreground"
			href="/projects">Projects</a
		> -->
		<a
			class="text-muted-foreground font-semibold transition-colors hover:text-foreground"
			href="/about">About me</a
		>
	</div>
</footer>
