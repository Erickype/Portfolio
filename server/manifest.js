const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"_app/immutable/start-8a5a576b.js","imports":["_app/immutable/start-8a5a576b.js","_app/immutable/chunks/index-d11e8e7c.js","_app/immutable/chunks/singletons-a769a7ba.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./chunks/0-046f38ee.js'),
			() => import('./chunks/1-1edf5707.js'),
			() => import('./chunks/2-9ea0af9c.js'),
			() => import('./chunks/3-38afbb3a.js'),
			() => import('./chunks/4-1eee8657.js'),
			() => import('./chunks/5-fe17ba0e.js'),
			() => import('./chunks/6-754bc4ad.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/more/[slug]",
				pattern: /^\/more\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "/resume",
				pattern: /^\/resume\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			},
			{
				id: "/works",
				pattern: /^\/works\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 6 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

export { manifest };
//# sourceMappingURL=manifest.js.map
