<script lang="ts">
    import * as Card from "$lib/components/ui/card/index.js";
    import type { Experience } from "@prisma/client";

    export let experiences: Experience[];
</script>

<div class="flex flex-col">
    <h1
        class="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-5xl mb-4"
    >
        Experience
    </h1>

    <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 my-4 gap-6">
        {#each experiences as experience}
            <Card.Root class="bg-background/50">
                <Card.Header>
                    <Card.Title class="text-pretty text-primary"
                        >{experience.project} ({experience.jobTitle})</Card.Title
                    >
                    <Card.Description>{experience.company}</Card.Description>
                </Card.Header>
                <Card.Content class="grid gap-4">
                    <h1 class="text-base text-muted-foreground font-semibold">
                        Responsibilities and activities
                    </h1>
                    <div>
                        {#each experience.activities as activity}
                            <div
                                class="grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                            >
                                <span
                                    class="flex h-2 w-2 translate-y-1 rounded-full bg-primary"
                                />
                                <div class="space-y-1">
                                    <p class="text-sm leading-none">
                                        {activity}
                                    </p>
                                </div>
                            </div>
                        {/each}
                    </div>
                    <div class="grid grid-cols-3 gap-2 mt-4">
                        {#each experience.technologies as technology}
                            <img
                                class="w-12 h-12 m-auto place-content-center"
                                src={`/src/lib/assets/icons/${technology}.svg`}
                                alt={`${technology} icon`}
                            />
                        {/each}
                    </div>
                </Card.Content>
            </Card.Root>
        {/each}
    </div>
</div>
