<script lang="ts">
    import * as Card from "$lib/components/ui/card/index.js";
    import { Button } from "$lib/components/ui/button/index.js";

    import Github from "lucide-svelte/icons/github";

    import type { PersonalProject } from "@prisma/client";

    export let personalProjects: PersonalProject[];
</script>

<div class="flex flex-col mt-10">
    <h1
        class="scroll-m-20 text-xl font-extrabold tracking-tight lg:text-5xl mb-4"
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
                    <div class="text-pretty text-xs lg:text-sm pr-4">
                        {project.description}
                    </div>
                </Card.Header>
                <Card.Content class="grid gap-4">
                    <div class="flex">
                        <img
                            class="w-full"
                            src={project.imageURL}
                            alt={project.name}
                        />
                    </div>
                    <h1
                        class="text-sm lg:text-base text-muted-foreground font-semibold"
                    >
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
                                    <p class="text-xs lg:text-sm leading-none">
                                        {characteristic}
                                    </p>
                                </div>
                            </div>
                        {/each}
                    </div>
                    <div class="grid grid-cols-3 gap-2 mb-4">
                        {#each project.technologies as technology}
                            <img
                                class="w-8 h-8 lg:w-12 lg:h-12 m-auto place-content-center"
                                src={`icons/${technology}.svg`}
                                alt={`${technology} icon`}
                            />
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
