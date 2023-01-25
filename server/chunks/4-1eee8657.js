import { p as pb } from './pocketbase-51fb9c93.js';
import { e as error } from './index2-bebb4fa4.js';
import 'pocketbase';

const load = async ({ params }) => {
  const content = await getMoreAboutContent(params.slug);
  if (params) {
    return {
      moreAboutContent: content
    };
  }
  throw error(404, "Not found");
};
async function getMoreAboutContent(slug) {
  const record = await pb.collection("mainContents").getFirstListItem('titleContent="' + slug + '"');
  const resultList = await pb.collection("moreAboutContent").getList(1, 50, {
    filter: 'mainContentId = "' + record.id + '"'
  });
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

const index = 4;
const component = async () => (await import('./_page.svelte-7d11cded.js')).default;
const file = '_app/immutable/components/pages/more/_slug_/_page.svelte-d999ae4b.js';
const imports = ["_app/immutable/components/pages/more/_slug_/_page.svelte-d999ae4b.js","_app/immutable/chunks/index-d11e8e7c.js","_app/immutable/chunks/stores-52c60820.js","_app/immutable/chunks/singletons-a769a7ba.js","_app/immutable/chunks/projectContentCard-84d3394a.js"];
const stylesheets = ["_app/immutable/assets/projectContentCard-0fad6d4e.css"];
const fonts = [];

export { component, file, fonts, imports, index, _page_server_ts as server, stylesheets };
//# sourceMappingURL=4-1eee8657.js.map
