<h3>Contact</h3>

<article>
	<form>
		<div class="grid">
			<label for="name">
				Your name
				<input type="text" id="name" name="firstname" placeholder="First name" required />
			</label>
			<label for="email"
				>Email address
				<input type="email" id="email" name="email" placeholder="Email address" required />
			</label>
		</div>

		<label for="comment">
			Your message
			<textarea
				id="comment"
				name="comment"
				placeholder="Your message"
				required
				rows="2"
				cols="40"
			/>
		</label>

		<button type="submit">Submit</button>
	</form>
</article>

<style>
	article {
		padding-top: 2em;
		padding-bottom: 1em;
		margin-top: 1em;
		margin-bottom: 1em;
	}
</style>
