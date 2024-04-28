<script lang="ts">
    import CodeBrakets from "$lib/assets/codeBrakets.gif";
    import Mail from "lucide-svelte/icons/mail";
    import LinkedIn from "lucide-svelte/icons/linkedin";
    import Github from "lucide-svelte/icons/github";

    import { Button } from "$lib/components/ui/button/index.js";
    import * as Avatar from "$lib/components/ui/avatar/index.js";
</script>

<div
    class="flex flex-col lg:flex-row justify-center items-center gap-6 lg:min-h-fit lg:h-[80vh]"
>
    <div class="px-4 lg:w-1/2">
        <h1
            class="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-5xl"
        >
            <div class="flex items-center gap-2 mb-2">
                <p>
                    Hi!, I'm
                    <br />
                    <span class="text-primary">Erick Carrasco</span>
                </p>
                <img
                    class="w-10 h-10 lg:w-14 lg:h-14"
                    src={CodeBrakets}
                    alt="Code brakets gif"
                />
            </div>
            <code
                class="relative rounded bg-muted px-2 py-2 font-mono text-sm lg:text-xl font-semibold"
            >
                Software Engineer
            </code>
        </h1>
        <p class="py-6 leading-7 [&:not(:first-child)]:mt-6">
            Experienced in different areas of software development. Excited to
            join a team of passionate individuals and work in an engaging
            project.
        </p>
    </div>
    <div class="flex flex-col lg:w-1/2 justify-center items-center">
        <Avatar.Root class="w-24 h-24 lg:w-60 lg:h-60">
            <Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" />
            <Avatar.Fallback>EC</Avatar.Fallback>
        </Avatar.Root>
        <div class="flex mt-6 px-6 py-4 gap-4">
            <Button
                href="https://www.linkedin.com/in/erick-carrasco-santos"
                variant="outline"
                size="icon"
            >
                <LinkedIn class="h-4 w-4" />
            </Button>
            <Button
                href="https://github.com/Erickype"
                variant="outline"
                size="icon"
            >
                <Github class="h-4 w-4" />
            </Button>
            <Button
                href="mailto:erickype@hotmail.com"
                variant="outline"
                size="icon"
            >
                <Mail class="h-4 w-4" />
            </Button>
        </div>
    </div>
</div>
