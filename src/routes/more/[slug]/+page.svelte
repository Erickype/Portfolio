<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h1>{data.menus[0].menuName}</h1>
<div>{@html data.menus[0].menuName}</div>
