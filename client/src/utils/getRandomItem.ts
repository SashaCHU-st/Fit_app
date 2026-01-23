export const getRandomItem = (food: string) => {
  const randomIndex = Math.floor(Math.random() * food.length);
  return food[randomIndex];
};
