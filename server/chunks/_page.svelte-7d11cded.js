import { c as create_ssr_component, d as subscribe, b as escape, v as validate_component } from './index-9bef4a3e.js';
import { p as page } from './stores-5998ae1a.js';
import { P as ProjectContentCard } from './projectContentCard-dc6934d3.js';
import './constants-6448b590.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$unsubscribe_page();
  return `<h3>${escape($page.params.slug)} Projects</h3>

${validate_component(ProjectContentCard, "ProjectsContent").$$render($$result, { data: data.moreAboutContent }, {}, {})}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-7d11cded.js.map
