interface Nutriments {
  "energy-kcal_100g": number;
  proteins_100g: number;
  carbohydrates_100g: number;
  fat_100g: number;
}

interface FoodProduct {
  product_name: string;
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

export const FoodData = async (foodLog: string): Promise<FoodApiResponse> => {
  const response = await fetchWithTimeout(
    `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${foodLog}&search_simple=1&action=process&json=1&page_size=1`,
    20000,
  );
  const data = await response.json();
  console.log(data);

  if (data.count === 0) {
    throw new Error(`Food with such as name ${foodLog} not exist`);
  }
  if (!response.ok) {
    throw new Error(`Something went wrong`);
  }
  return data as FoodApiResponse;
};
