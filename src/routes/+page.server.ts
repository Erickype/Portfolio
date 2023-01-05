import type { IMenu, IMenuContents } from "$lib/interfaces/iMenu";
import { pb } from "$lib/pocketbase";
import type { PageServerLoad } from "./$types";
import { page } from "$app/stores";

export const load = (async () => {
    return {
        contents: await fetchMenuContent()
    }
}) satisfies PageServerLoad

export function getMenuId(menuName: string): string {

    let menuId: string = ""

    page.subscribe((value) => {
        let menus = (value.data.menus) as IMenu[];
        menuId = menus.find(menu => menu.menuName === menuName)!.id
    });

    return menuId
}

async function fetchMenuContent() {

    const menuId = getMenuId("Resume")
    console.log(menuId);
    

    const response = await pb.collection("mainContents").getList<IMenuContents>(1, 10, {
        filter: 'menuId = "'+menuId+'"',
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