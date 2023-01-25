import { c as create_ssr_component, v as validate_component, e as each, b as escape } from './index-9bef4a3e.js';

const css$1 = {
  code: "nav.svelte-51rdju{padding-right:2em;background-color:var(--primary);margin-bottom:1em}",
  map: null
};
const NavBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css$1);
  return `<nav class="${"svelte-51rdju"}"><ul></ul>
	<ul>${each(data.menus, (menu) => {
    return `<li><a href="${"/" + escape(menu.menuUrl, true)}" role="${"button"}">${escape(menu.menuName)}</a>
			</li>`;
  })}</ul>
</nav>`;
});
const css = {
  code: "hgroup.svelte-nv15py{margin:auto;padding:1em;text-align:center;background-color:var(--primary)}h6.svelte-nv15py,a.svelte-nv15py{color:aliceblue}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<hgroup class="${"svelte-nv15py"}"><h6 class="${"svelte-nv15py"}">Erick Carrasco</h6>
	<a href="${"mailto:erickype@hotmail.com"}" class="${"svelte-nv15py"}">erickype@hotmail.com</a>
</hgroup>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${validate_component(NavBar, "NavBar").$$render($$result, { data }, {}, {})}

<main class="${"container"}"><section>${slots.default ? slots.default({}) : ``}</section></main>

${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-a3be16b5.js.map
