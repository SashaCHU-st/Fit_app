// import type { StaticProps, DynamicProps } from "../types/api";

interface Nutriments {
  "energy-kcal_100g": number;
  proteins_100g: number;
  carbohydrates_100g: number;
  fat_100g: number;
}

interface FoodProduct {
  product_name: string;
  brands?: string;
  nutriments: Nutriments;
}

export interface FoodApiResponse {
  products: FoodProduct[];
}


const fetchWithTimeout = async (
  url: string,
  timeoutMs: number,
): Promise<Response> => {
  let timeoutId: ReturnType<typeof setTimeout> | undefined;
  const timeoutPromise = new Promise<never>((_, reject) => {
    timeoutId = setTimeout(() => {
      reject(new Error("Request timeout"));
    }, timeoutMs);
  });

  try {
    return (await Promise.race([fetch(url), timeoutPromise])) as Response;
  } finally {
    if (timeoutId) clearTimeout(timeoutId);
  }
};

/** Checks whether the venue slug exists and throws an error if it does not.
 * Checking coordinates of the venue
 */
export const FoodData = async (foodLog: string): Promise<FoodApiResponse> => {
  const response = await fetchWithTimeout(
    `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${foodLog}&search_simple=1&action=process&json=1&page_size=1`,
    5000,
  );
  const data = await response.json();
  console.log(data);

  if (!response.ok) {
    throw new Error(`Venue with such as name ${foodLog} not  exist`);
  }
  return data as FoodApiResponse;
};
