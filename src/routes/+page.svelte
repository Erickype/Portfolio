<script lang="ts">
	import type { PageServerData } from './$types';

	export let data: PageServerData;
</script>

<div>
	<div>
		<div>
			<h1>
				<p>
					Hello, <br />
					I'm Erick <br />
					Software Engineer
				</p>
			</h1>
		</div>
		<div>
			<img
				src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6xMy3lYAo5Xb8tZ5rG4wWIDa-2zzfi8mE745Kr0YAMJkH3C9PvB7yZlZ96LXF8KE9MyE&usqp=CAU"
				alt="portrait"
			/>
		</div>
	</div>
	<div>
		{#each data.contents as content (content.id)}
			<div>
				<div>{content.titleContent}</div>
				<div>
					<p>
						{content.bodyContent}
					</p>
				</div>
				<div>
					<button>{content.actionContent}</button>
				</div>
			</div>
		{/each}
	</div>
</div>
