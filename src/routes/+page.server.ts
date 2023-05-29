import type { PageServerLoad } from './$types';
import { homeName } from '$lib/constants';
import { fetchMenuContent } from '$lib/functions';

export const load = (async ({ parent }) => {
	const menus = await parent();
	const menu = menus.menus.find((menu: { menuName: string; }) => menu.menuName === homeName)!.id;
	return {
		contents: await fetchMenuContent(menu)
	};
}) satisfies PageServerLoad;
