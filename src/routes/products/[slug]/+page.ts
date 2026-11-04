import type { PageLoad } from './$types';
import { getCommodity } from '#lib/data/products';
import { error } from '@sveltejs/kit';

export const load: PageLoad = ({ params }) => {
	const commodity = getCommodity(params.slug);

	if (!commodity) {
		throw error(404, `Commodity "${params.slug}" not found`);
	}

	return { commodity };
};

