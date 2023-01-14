<script lang="ts">
	import type { PageServerData } from './$types';

	export let data: PageServerData;
</script>

<div class="grid">
	<h1>
		<p>
			Hello, <br />
			I'm Erick <br />
			Software Engineer
		</p>
	</h1>
	<span />
	<img
		src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6xMy3lYAo5Xb8tZ5rG4wWIDa-2zzfi8mE745Kr0YAMJkH3C9PvB7yZlZ96LXF8KE9MyE&usqp=CAU"
		alt="portrait"
	/>
</div>

<div class="grid">
	{#each data.contents as content (content.id)}
		<article id="article">
			<div id="content">
				<h5>
					{content.titleContent}
				</h5>
				<p>
					{content.bodyContent}
				</p>
			</div>
			<footer>
				<a href="{content.titleContent}">
					<small>
						{content.actionContent}
					</small>
				</a>
			</footer>
		</article>
	{/each}
</div>

<style>
	#content{
		height: 100%;
		max-height: 150px;
	}
</style>
