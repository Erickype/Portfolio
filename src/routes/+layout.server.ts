import type { IMenu } from "$lib/interfaces/iMenu";
import { pb } from "../lib/pocketbase";
import type { LayoutServerLoad } from "./$types";

export const prerender = true

export const load = (async () => {
    return {
        menus: await fetchMenus()
    }
}) satisfies LayoutServerLoad


async function fetchMenus() {
    const response = await pb.collection("menus").getList<IMenu>()

    const data = response.items.map((res) => {
        return {
            id: res.id,
            menuName: res.menuName,
            menuUrl: res.menuUrl
        }
    })

    return data
}