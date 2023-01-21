import type { IMoreAboutContent } from '$lib/interfaces/iMenu';
import { pb } from '$lib/pocketbase';
import type { PageServerLoad } from './$types';

export const load = (async ({ }) => {
    const content = await getWorksContent()
    return {
        moreAboutContent: content
    };
}) satisfies PageServerLoad

async function getWorksContent() {
    const resultList = await pb.collection('moreAboutContent').getList<IMoreAboutContent>(1, 50, {
    });

    const data = resultList.items.map((res) => {
        const item: IMoreAboutContent = {
            id: res.id,
            projectName: res.projectName,
            description: res.description,
            url: res.url,
            image: res.image,
            mainContentId: res.mainContentId
        }
        return item
    })

    return data
}