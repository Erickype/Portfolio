import { c as create_ssr_component, v as validate_component } from './index-9bef4a3e.js';
import { P as ProjectContentCard } from './projectContentCard-dc6934d3.js';
import './constants-6448b590.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<h1>My projects</h1>

${validate_component(ProjectContentCard, "ProjectsContent").$$render($$result, { data: data.moreAboutContent }, {}, {})}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-77b43015.js.map
