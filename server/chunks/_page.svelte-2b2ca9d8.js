import { c as create_ssr_component, e as each, b as escape } from './index-9bef4a3e.js';

const css = {
  code: "#content.svelte-ijxsgr{height:100%;max-height:150px}.moreButton.svelte-ijxsgr{width:100%}img.svelte-ijxsgr{margin:auto}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div class="${"grid"}"><h1><p>Hello, <br>
			I&#39;m Erick <br>
			Software Engineer
		</p></h1>
	<img src="${"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6xMy3lYAo5Xb8tZ5rG4wWIDa-2zzfi8mE745Kr0YAMJkH3C9PvB7yZlZ96LXF8KE9MyE&usqp=CAU"}" alt="${"portrait"}" class="${"svelte-ijxsgr"}"></div>

<kbd>Principal skills</kbd>

<div class="${"grid"}">${each(data.contents, (content) => {
    return `<article id="${"article"}"><div id="${"content"}" class="${"svelte-ijxsgr"}"><h5>${escape(content.titleContent)}</h5>
				<p>${escape(content.bodyContent)}
				</p></div>
			<footer><a href="${"more/" + escape(content.titleContent, true)}" role="${"button"}" class="${"moreButton svelte-ijxsgr"}"><small>${escape(content.actionContent)}</small>
				</a></footer>
		</article>`;
  })}
</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-2b2ca9d8.js.map
