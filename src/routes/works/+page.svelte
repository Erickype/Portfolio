<script lang="ts">
	import type { PageData } from "./$types";
    import ProjectsContent from "../../components/projectContentCard.svelte"

    export let data : PageData
</script>

<h1>My projects</h1>

<ProjectsContent data = {data.moreAboutContent}></ProjectsContent>