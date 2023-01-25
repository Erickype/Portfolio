import { c as create_ssr_component, e as each, b as escape, f as add_attribute } from './index-9bef4a3e.js';
import { i as imageStoreUrl } from './constants-6448b590.js';

const css = {
  code: ".imageCell.svelte-szbjv2{display:flex;align-items:center;justify-content:center}img.svelte-szbjv2{margin:auto}article.svelte-szbjv2{padding:1em;margin:1em}.contentArticle.svelte-szbjv2{margin:0;padding:0;position:relative}header.svelte-szbjv2{margin:0;padding:0;text-align:center}h5.svelte-szbjv2{margin:auto;padding:auto;padding-top:0.5em;padding-bottom:0.5em}#content.svelte-szbjv2{height:150px;padding:1em}footer.svelte-szbjv2{margin:0;padding:0.5em;text-align:center;position:absolute;bottom:0;width:100%}",
  map: null
};
const ProjectContentCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${data.length ? each(data, (moreContent, i) => {
    return `<article class="${"svelte-szbjv2"}"><div class="${"grid"}">${i % 2 == 0 ? `<article class="${"contentArticle svelte-szbjv2"}"><header class="${"svelte-szbjv2"}"><h5 class="${"svelte-szbjv2"}">${escape(moreContent.projectName)}</h5></header>

					<div id="${"content"}" class="${"svelte-szbjv2"}"><p>${escape(moreContent.description)}</p></div>
					<footer class="${"svelte-szbjv2"}"><a${add_attribute("href", moreContent.url, 0)} role="${"button"}">Github</a>
					</footer></article>
				<div class="${"imageCell svelte-szbjv2"}"><img src="${escape(imageStoreUrl, true) + "/" + escape(moreContent.id, true) + "/" + escape(moreContent.image, true)}"${add_attribute("alt", moreContent.projectName, 0)} class="${"svelte-szbjv2"}">
				</div>` : `<div class="${"imageCell svelte-szbjv2"}"><img src="${escape(imageStoreUrl, true) + "/" + escape(moreContent.id, true) + "/" + escape(moreContent.image, true)}"${add_attribute("alt", moreContent.projectName, 0)} class="${"svelte-szbjv2"}"></div>
				<article class="${"contentArticle svelte-szbjv2"}"><header class="${"svelte-szbjv2"}"><h5 class="${"svelte-szbjv2"}">${escape(moreContent.projectName)}</h5></header>

					<div id="${"content"}" class="${"svelte-szbjv2"}"><p>${escape(moreContent.description)}</p></div>
					<footer class="${"svelte-szbjv2"}"><a${add_attribute("href", moreContent.url, 0)} role="${"button"}">Github</a></footer>
				</article>`}</div>
	</article>`;
  }) : `<h1>There is nothing here, ups!</h1>`}`;
});

export { ProjectContentCard as P };
//# sourceMappingURL=projectContentCard-dc6934d3.js.map
