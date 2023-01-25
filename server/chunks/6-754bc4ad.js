import { p as pb } from './pocketbase-51fb9c93.js';
import 'pocketbase';

const load = async ({}) => {
  const content = await getWorksContent();
  return {
    moreAboutContent: content
  };
};
async function getWorksContent() {
  const resultList = await pb.collection("moreAboutContent").getList(1, 50, {});
  const data = resultList.items.map((res) => {
    const item = {
      id: res.id,
      projectName: res.projectName,
      description: res.description,
      url: res.url,
      image: res.image,
      mainContentId: res.mainContentId
    };
    return item;
  });
  return data;
}

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 6;
const component = async () => (await import('./_page.svelte-77b43015.js')).default;
const file = '_app/immutable/components/pages/works/_page.svelte-e9daf738.js';
const imports = ["_app/immutable/components/pages/works/_page.svelte-e9daf738.js","_app/immutable/chunks/index-d11e8e7c.js","_app/immutable/chunks/projectContentCard-84d3394a.js"];
const stylesheets = ["_app/immutable/assets/projectContentCard-0fad6d4e.css"];
const fonts = [];

export { component, file, fonts, imports, index, _page_server_ts as server, stylesheets };
//# sourceMappingURL=6-754bc4ad.js.map
