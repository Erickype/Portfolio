import { p as pb } from './pocketbase-51fb9c93.js';
import 'pocketbase';

const load = async () => {
  return {
    menus: await fetchMenus()
  };
};
async function fetchMenus() {
  const response = await pb.collection("menus").getList();
  const data = response.items.map((res) => {
    return {
      id: res.id,
      menuName: res.menuName,
      menuUrl: res.menuUrl
    };
  });
  return data;
}

var _layout_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 0;
const component = async () => (await import('./_layout.svelte-a3be16b5.js')).default;
const file = '_app/immutable/components/pages/_layout.svelte-8c42530f.js';
const imports = ["_app/immutable/components/pages/_layout.svelte-8c42530f.js","_app/immutable/chunks/index-d11e8e7c.js"];
const stylesheets = ["_app/immutable/assets/_layout-cadf2262.css"];
const fonts = [];

export { component, file, fonts, imports, index, _layout_server_ts as server, stylesheets };
//# sourceMappingURL=0-046f38ee.js.map
