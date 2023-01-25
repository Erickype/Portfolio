import { c as create_ssr_component } from './index-9bef4a3e.js';

const css = {
  code: "article.svelte-1gdb17i{padding-top:2em;padding-bottom:1em;margin-top:1em;margin-bottom:1em}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<h3>Contact</h3>

<article class="${"svelte-1gdb17i"}"><form><div class="${"grid"}"><label for="${"name"}">Your name
				<input type="${"text"}" id="${"name"}" name="${"firstname"}" placeholder="${"First name"}" required></label>
			<label for="${"email"}">Email address
				<input type="${"email"}" id="${"email"}" name="${"email"}" placeholder="${"Email address"}" required></label></div>

		<label for="${"comment"}">Your message
			<textarea id="${"comment"}" name="${"comment"}" placeholder="${"Your message"}" required rows="${"2"}" cols="${"40"}"></textarea></label>

		<button type="${"submit"}">Submit</button></form>
</article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-48344dc0.js.map
