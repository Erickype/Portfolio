import type { IMenuContents } from "$lib/interfaces/iMenu";
import { pb } from "$lib/pocketbase";
import type { PageServerLoad } from "./$types";

export const load = (async () => {
    return {
        contents: await fetchMenuContent()
    }
}) satisfies PageServerLoad

async function fetchMenuContent() {

    const response = await pb.collection("mainContents").getList<IMenuContents>(1, 10, {
        filter: 'menuId = "go3dgkbvf9evzu7"',
    });

    const data = response.items.map((res) => {
        return {
            id: res.id,
            titleContent: res.titleContent,
            bodyContent: res.bodyContent,
            actionContent: res.actionContent
        }
    })

    return data
}