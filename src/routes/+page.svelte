<script lang="ts">
	import type { PageServerData } from './$types';

	export let data: PageServerData;
</script>

<div class="flex flex-col h-auto min-h-full overflow-x-hidden overflow-y-auto">
	<div class="bg-blue h-2/5 py-10 inline-flex px-5">
		<div class="px-5 text-white overflow-hidden w-2/3 py-5">
			<h1 class=" text-left flex-auto">
				<p class="text-lg  sm:text- md:text-xl lg:text-4xl font-bold">
					Hello, <br />
					I'm Erick <br />
					Software Engineer
				</p>
			</h1>
		</div>
		<div class="flex items-center justify-center h-auto min-h-full overflow-hidden w-1/3">
			<img
				class="mx-auto"
				src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6xMy3lYAo5Xb8tZ5rG4wWIDa-2zzfi8mE745Kr0YAMJkH3C9PvB7yZlZ96LXF8KE9MyE&usqp=CAU"
				alt="portrait"
			/>
		</div>
	</div>
	<div class="bg-skyBlue grid grid-cols-2 text-darkBlue text-center text-lg flex-grow">
		{#each data.contents as content (content.id)}
			<div class="bg-white my-10 mx-5 rounded-xl p-4 relative">
				<div class="text-xl font-bold mb-4">{content.titleContent}</div>
				<div class="text-darkBlue mb-4 pb-10">
					<p>
						{content.bodyContent}
					</p>
				</div>
				<div class="absolute left-0 right-0 bottom-0 p-4">
					<button class="bg-blue text-white px-4 py-2 rounded-full basis-1/2"
						>{content.actionContent}</button
					>
				</div>
			</div>
		{/each}
	</div>
</div>
