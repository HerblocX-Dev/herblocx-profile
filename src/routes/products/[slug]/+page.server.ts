import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { COMMODITIES, getCommodity } from "#lib/constants/commodities-constant.ts";
import { getCommoditySpecification } from "#lib/constants/commodity-specs.ts";

export const load: PageServerLoad = async ({ params }) => {
  const { slug } = params;
  const commodity = getCommodity(slug);

  if (!commodity) {
    throw error(404, `Product '${slug}' not found in HerblocX catalogue`);
  }

  const spec = getCommoditySpecification(slug);
  const otherCommodities = COMMODITIES.filter((c) => c.slug !== slug).slice(0, 3);

  return {
    commodity,
    spec,
    otherCommodities,
  };
};

