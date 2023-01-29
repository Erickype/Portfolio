<script lang="ts">
	import { base } from '$app/paths';
	import SideBar from '../../components/Layout/sideBar.svelte';
</script>

<hgroup class="title">
	<h1>Erick Josué Carrasco Santos</h1>
	<h3>
		<svg class="icon" viewBox="0 0 20 20">
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
				/></svg
			>
		</svg>
		+593 996540761
	</h3>
</hgroup>

<article>
	<div class="side">
		<a href="{base}/resume.pdf" class="download" download="">
			<svg
				version="1.1"
				id="_x32_"
				xmlns="http://www.w3.org/2000/svg"
				xmlns:xlink="http://www.w3.org/1999/xlink"
				viewBox="0 0 512 512"
				xml:space="preserve"
			>
				<g>
					<path
						class="st0"
						d="M349.444,369.978H315.14c-9.288,0-16.844-7.55-16.844-16.836v-174.11c0-11.04-8.983-20.027-20.023-20.027
               h-44.546c-11.04,0-20.021,8.987-20.021,20.027v174.11c0,9.286-7.556,16.836-16.844,16.836h-34.305
               c-5.538,0-9.503,1.848-11.168,5.198c-1.666,3.354-0.738,7.628,2.609,12.046l89.594,118.093C246.864,509.628,251.27,512,256,512
               c4.73,0,9.136-2.372,12.408-6.685l89.594-118.093c3.348-4.418,4.274-8.692,2.611-12.046
               C358.948,371.826,354.982,369.978,349.444,369.978z"
					/>
					<path
						class="st0"
						d="M445.316,0H66.684C56.218,0,47.704,8.517,47.704,18.983v318.112h130.383v-66.786h-63.602V66.785h283.03
               v203.524h-63.602v66.786h130.384V18.983C464.296,8.517,455.781,0,445.316,0z"
					/>
				</g>
			</svg>
		</a>
		<SideBar />
	</div>

	<h2>Education</h2>
	<div class="grid">
		<hgroup>
			<h4>Universidad Técnica de Ambato</h4>
			<h5>Software Engineer</h5>
		</hgroup>
	</div>
	<h2>Skills</h2>
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
	<h2>Experience</h2>
	<div class="grid">
		<div>
			<hgroup>
				<h3>Empresa Eléctrica Ambato Regional Centro Norte</h3>
				<h5>Software Engineer (intern)</h5>
			</hgroup>
			<ul>
				<li>Software requirements especification for a intern process</li>
				<li>Develop of the backend application in Java with SpringBoot using Oracle DB</li>
				<li>Develop of the Frontend application in Angular</li>
			</ul>
		</div>
	</div>
</article>

<style>
	h2 {
		margin-bottom: 5px;
	}
	.title {
		text-align: center;
		margin-bottom: 5px;
	}
	article {
		margin-top: 20px;
		padding-top: 20px;
		padding-bottom: 20px;
		position: relative;
	}
	.side {
		position: absolute;
		top: 0;
		right: 0;
		padding-right: 20px;
		padding-top: 20px;
	}
	.icon {
		height: 1em;
		margin-right: 0.5em;
	}
</style>
