<script lang="ts">
    import Mail from "lucide-svelte/icons/mail";
    import LinkedIn from "lucide-svelte/icons/linkedin";
    import Github from "lucide-svelte/icons/github";

    import { Button } from "$lib/components/ui/button/index.js";

    export let buttonVariant;
</script>

<Button
    href="https://www.linkedin.com/in/erick-carrasco-santos"
    variant={buttonVariant}
    size="icon"
>
    <LinkedIn class="h-4 w-4" />
</Button>
<Button href="https://github.com/Erickype" variant={buttonVariant} size="icon">
    <Github class="h-4 w-4" />
</Button>
<Button href="mailto:erickype@hotmail.com" variant={buttonVariant} size="icon">
    <Mail class="h-4 w-4" />
</Button>
