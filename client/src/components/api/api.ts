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
  //Abort Controller: allows to abort  Web requests
  const controller = new AbortController();

  //setTimeout(func, delay)
  const timeoutId = setTimeout(() => {
    //cancel operation
    controller.abort();
  }, timeoutMs);

  try {
    // fetch(resource, options => signal:conroller.signal)
    return await fetch(url, {
      signal: controller.signal,
      //if controller.abort() then fetch catch that and goes to catch
    });
  } catch {
    throw new Error("Request timeout. Sometimes it takes longer, please try again later :)");
  } finally {
    clearTimeout(timeoutId);
  }
};

export const FoodData = async (foodLog: string): Promise<FoodApiResponse> => {
  const response = await fetchWithTimeout(
    `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${foodLog}&search_simple=1&action=process&json=1&page_size=1`,
    20000,
  );
  const data = await response.json();
  // console.log(data);

  if (data.count === 0) {
    throw new Error(`Food with such as name ${foodLog} not exist`);
  }
  if (!response.ok) {
    throw new Error(`Something went wrong`);
  }
  return data as FoodApiResponse;
};
