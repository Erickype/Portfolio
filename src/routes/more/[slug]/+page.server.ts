import type { IMoreAboutContent } from '$lib/interfaces/iMenu';
import { pb } from '$lib/pocketbase';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async ({ params }) => {
	const content = await getMoreAboutContent(params.slug);
	if (params) {
		return {
			moreAboutContent: content
		};
	}
	throw error(404, 'Not found');
}) satisfies PageServerLoad;

async function getMoreAboutContent(slug: string) {
	const record = await pb
		.collection('mainContents')
		.getFirstListItem('titleContent="' + slug + '"');
	const resultList = await pb.collection('moreAboutContent').getList<IMoreAboutContent>(1, 50, {
		filter: 'mainContentId = "' + record.id + '"'
	});

	const data = resultList.items.map((res) => {
		const item: IMoreAboutContent = {
			id: res.id,
			projectName: res.projectName,
			description: res.description,
			url: res.url,
			image: res.image,
			mainContentId: res.mainContentId
		};
		return item;
	});
	data.reverse()

	return data;
}
