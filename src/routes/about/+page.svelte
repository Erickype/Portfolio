<script lang="ts">
	import SideBar from '$lib/components/Layout/sideBar.svelte';
</script>

<div class="flex flex-col items-center text-center mb-4">
	<h3 class="text-4xl text-primary font-bold">Erick Josué Carrasco Santos</h3>
	<div class="flex">
		<svg class="h-5 pr-2 pt-1" viewBox="0 0 20 20">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				id="Layer_1"
				x="0"
				y="0"
				version="1.1"
				viewBox="0 0 29 29"
				xml:space="preserve"
				><path
					d="m20.914 17.743-2.091 1.178a1.319 1.319 0 0 1-1.58-.217l-6.979-6.979a1.32 1.32 0 0 1-.217-1.58l1.178-2.091a1.978 1.978 0 0 0-.325-2.37L7.766 2.55a1.978 1.978 0 0 0-2.798 0L3.545 3.972a5.276 5.276 0 0 0-.793 6.446l.714 1.19a41.36 41.36 0 0 0 14.946 14.631l.141.081c2.102 1.201 4.699.851 6.382-.831l1.486-1.486a1.978 1.978 0 0 0 0-2.798l-3.136-3.136a1.978 1.978 0 0 0-2.371-.326z"
					fill="#e4e4e4"
				/></svg
			>
		</svg>
		+593 996540761
	</div>
</div>

<div class="flex flex-col items-center p-4 lg:w-2/3 mx-auto">
	<div class="card bg-base-200 relative p-4 w-full">
		<div class="absolute right-5 top-5">
			<SideBar />
		</div>
		<article class="prose p-4 lg:p-10">
			<h3 class="text-accent font-bold">Education</h3>
			<div class="grid">
				<hgroup>
					<h4>Universidad Técnica de Ambato</h4>
					<h5>Software Engineer</h5>
				</hgroup>
			</div>
			<h3 class="text-accent font-bold">Experience</h3>
			<div class="grid">
				<div>
					<hgroup>
						<h3>Empresa Eléctrica Ambato Regional Centro Norte</h3>
						<h5>Software Engineer (intern)</h5>
					</hgroup>
					<ul>
						<li>
							Developed a full stack application to automate an intern process that helps enhance
							and optimize the managing of that process.
						</li>
						<li>Collected system requirements and modeled the system.</li>
						<li>
							Built the backend application using an MVC architecture in the programming language
							Java, utilizing the Spring Boot framework and Oracle database.
						</li>
						<li>
							Built the frontend application within the organization's brand using the programming
							language Typescript and the Angular framework.
						</li>
					</ul>
				</div>
			</div>
			<h3 class="text-accent font-bold">Skills</h3>
			<div class="grid">
				<ul>
					<li>
						<strong>Languages: </strong>Go, Java, Typescript, C#
					</li>
					<li>
						<strong>Databases: </strong>Mysql, Postgres, MongoDB, Pocketbase, Oracle
					</li>
					<li>
						<strong>Frameworks: </strong>Angular, Unity, Svelte y Sveltkit, SpringBoot
					</li>
					<li>
						<strong>Tools & Thecnology: </strong>Git & Github, Docker, Jira
					</li>
				</ul>
			</div>
		</article>
	</div>
</div>
