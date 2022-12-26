import { pb } from "../lib/pocketbase";
import type { LayoutServerLoad } from "./$types";

export const load = (async () => {
    return {
        posts: await fectMenus()
    }
}) satisfies LayoutServerLoad

async function fectMenus():Promise<Array<{[key:string]:any}>>{
    const response = await pb.collection('menus').getList();
    const data = response.items.map((post) => post.export())
    return data
}