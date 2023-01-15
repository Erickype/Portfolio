<h1>Contact</h1>

<article>
	<form>
		<label for="name">
			Your name
			<input type="text" id="name" name="firstname" placeholder="First name" required />
		</label>
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
		<!-- Markup example 2: input is after label -->
		<label for="email">Email address</label>
		<input type="email" id="email" name="email" placeholder="Email address" required />
		<small>I'll never share your email with anyone else.</small>

		<!-- Button -->
		<button type="submit">Submit</button>
	</form>
</article>
