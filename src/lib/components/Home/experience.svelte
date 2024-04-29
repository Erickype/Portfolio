<script lang="ts">
    import ArrowRigth from "lucide-svelte/icons/arrow-right";
    import { Button } from "$lib/components/ui/button/index.js";
    import * as Card from "$lib/components/ui/card/index.js";
    import type { Experience } from "./types";

    const experiences: Experience[] = [
        {
            title: "Fullstack programmer",
            company: "Oscus Coop.",
            project: "Scanned Documents Digitalization Automation",
            activities: [
                "Requirement analysis and design",
                "Developed a proxy rest application in C# to consume internal API's",
                "Implemented scanner automatic scanning",
                "Management of Apache Artemis MQ",
                "Developed a Java application to process MQ and upload documents to Amazon S3"
            ],
        },
        {
            title: "Fullstack programmer",
            company: "Empresa Eléctrica Ambato S.A. (EEASA)",
            project: "Contractor dashboard maintenance",
            activities: [
                "Requirement analysis and design",
                "Developed a proxy rest application in C# to consume internal API's",
                "Implemented scanner automatic scanning",
                "Management of Apache Artemis MQ",
                "Developed a Java application to process MQ and upload documents to Amazon S3"
            ],
        },
    ];
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
                        >{experience.project} ({experience.title})</Card.Title
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
                </Card.Content>
                <Card.Footer>
                    <Button class="w-full">
                        <ArrowRigth class="mr-2 h-4 w-4" /> More
                    </Button>
                </Card.Footer>
            </Card.Root>
        {/each}
    </div>
</div>
