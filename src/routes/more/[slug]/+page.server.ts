import type { IMoreAboutContent } from '$lib/interfaces/iMenu';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async ({ params }) => {
    const content = await getMoreAboutContent(params.slug)
    if (params) {
        return {
            moreAboutContent: content
        };
    }

    throw error(404, 'Not found');
}) satisfies PageServerLoad

async function getMoreAboutContent(slug: string) {
    const content: IMoreAboutContent[] = [{ id: "Test", description: "Test", projectName: "test", url: "test", mainContentId: "1" }]
    return content
}