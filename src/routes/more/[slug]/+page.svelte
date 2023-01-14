<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
    console.log(data.moreAboutContent[0]);
    
</script>

<h1>{data.moreAboutContent[0].projectName}</h1>
<div>{@html data.moreAboutContent[0].description}</div>
