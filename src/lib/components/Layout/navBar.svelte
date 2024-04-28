<script lang="ts">
	import Menu from "lucide-svelte/icons/menu";

	import { Button } from "$lib/components/ui/button/index.js";
	import * as Sheet from "$lib/components/ui/sheet/index.js";
	import type { NavBarItem } from "./types";
	import { onMount } from "svelte";

	const navItems: NavBarItem[] = [
		{
			label: "Home",
			path: "/",
		},
		{
			label: "Projects",
			path: "/projects",
		},
		{
			label: "About me",
			path: "/about",
		},
	];

	onMount(() => {
		const currentPath = window.location.pathname;

		document.querySelectorAll("a").forEach((item) => {
			if (currentPath.length === 1 && item.id.length === 1) {
				item.classList.remove("text-muted-foreground");
			}
			if (currentPath.includes(item.id) && item.id.length > 1) {
				item.classList.remove("text-muted-foreground");
			}
		});
	});

	function manageSelection(event: MouseEvent) {
		console.log(event.target);
		const link = event.target as HTMLLinkElement;
		document.querySelectorAll("a").forEach((item) => {
			item.classList.add("text-muted-foreground");
		});

		link.classList.remove("text-muted-foreground");
	}
</script>

<header
	class="sticky top-0 flex h-16 lg:justify-center items-center gap-4 border-b bg-background px-4 md:px-6"
>
	<nav
		class="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6"
	>
		{#each navItems as { label, path }}
			<a
				id={path}
				href={path}
				class="text-muted-foreground transition-colors hover:text-foreground"
				on:click={manageSelection}
			>
				{label}
			</a>
		{/each}
	</nav>
	<Sheet.Root>
		<Sheet.Trigger asChild let:builder>
			<Button
				variant="outline"
				size="icon"
				class="shrink-0 md:hidden"
				builders={[builder]}
			>
				<Menu class="h-5 w-5" />
				<span class="sr-only">Toggle navigation menu</span>
			</Button>
		</Sheet.Trigger>
		<Sheet.Content side="left">
			<nav class="grid gap-6 text-lg font-medium">
				{#each navItems as { label, path }}
					<a
						id={path}
						href={path}
						class="text-muted-foreground transition-colors hover:text-foreground"
						on:click={manageSelection}
					>
						{label}
					</a>
				{/each}
			</nav>
		</Sheet.Content>
	</Sheet.Root>
</header>
