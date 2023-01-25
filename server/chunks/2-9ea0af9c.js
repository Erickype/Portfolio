import { h as homeName } from './constants-6448b590.js';
import { p as pb } from './pocketbase-51fb9c93.js';
import 'pocketbase';

async function fetchMenuContent(menuId) {
  const response = await pb.collection("mainContents").getList(1, 10, {
    filter: 'menuId = "' + menuId + '"'
  });
  const data = response.items.map((res) => {
    return {
      id: res.id,
      titleContent: res.titleContent,
      bodyContent: res.bodyContent,
      actionContent: res.actionContent
    };
  });
  return data;
}
const load = async ({ parent }) => {
  const menus = await parent();
  const menu = menus.menus.find((menu2) => menu2.menuName === homeName).id;
  return {
    contents: await fetchMenuContent(menu)
  };
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 2;
const component = async () => (await import('./_page.svelte-2b2ca9d8.js')).default;
const file = '_app/immutable/components/pages/_page.svelte-5baa34b6.js';
const imports = ["_app/immutable/components/pages/_page.svelte-5baa34b6.js","_app/immutable/chunks/index-d11e8e7c.js"];
const stylesheets = ["_app/immutable/assets/_page-84bb55a7.css"];
const fonts = [];

export { component, file, fonts, imports, index, _page_server_ts as server, stylesheets };
//# sourceMappingURL=2-9ea0af9c.js.map
