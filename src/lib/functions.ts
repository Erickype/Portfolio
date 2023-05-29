import type { IMenuContents } from './interfaces/iMenu';
import { pb } from './pocketbase';

export async function fetchMenuContent(menuId: string) {
	const response = await pb.collection('mainContents').getList<IMenuContents>(1, 10, {
		filter: 'menuId = "' + menuId + '"'
	});

	const data = response.items.map((res) => {
		return {
			id: res.id,
			titleContent: res.titleContent,
			bodyContent: res.bodyContent,
			actionContent: res.actionContent
		};
	});

	return data;
}
