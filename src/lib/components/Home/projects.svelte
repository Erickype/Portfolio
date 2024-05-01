<script lang="ts">
    import * as Card from "$lib/components/ui/card/index.js";
    import { Button } from "$lib/components/ui/button/index.js";

    import Github from "lucide-svelte/icons/github";

    import type { PersonalProject } from "@prisma/client";

    export let personalProjects: PersonalProject[];
</script>

<div class="flex flex-col mt-10">
    <h1
        class="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-5xl mb-4"
    >
        Personal Projects
    </h1>

    <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 my-4 gap-6">
        {#each personalProjects as project}
            <Card.Root class="bg-background/50">
                <Card.Header>
                    <Card.Title class="text-pretty text-primary"
                        >{project.name}</Card.Title
                    >
                    <Card.Description>{project.description}</Card.Description>
                </Card.Header>
                <Card.Content class="grid gap-4">
                    <img src={project.imageURL} alt={project.name} />
                    <h1 class="text-base text-muted-foreground font-semibold">
                        Principal characteristics
                    </h1>
                    <div class="mb-4">
                        {#each project.characteristics as characteristic}
                            <div
                                class="grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                            >
                                <span
                                    class="flex h-2 w-2 translate-y-1 rounded-full bg-primary"
                                />
                                <div class="space-y-1">
                                    <p class="text-sm leading-none">
                                        {characteristic}
                                    </p>
                                </div>
                            </div>
                        {/each}
                    </div>
                    <div class="grid grid-cols-3 gap-2 mb-4">
                        {#each project.technologies as technology}
                            <a class="border text-center" href="/">
                                {technology}
                            </a>
                        {/each}
                    </div>
                </Card.Content>
                <Card.Footer>
                    <Button class="w-full" href={project.github}>
                        <Github class="mr-2 h-4 w-4" /> Github
                    </Button>
                </Card.Footer>
            </Card.Root>
        {/each}
    </div>
</div>
