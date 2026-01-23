import Button from "../ui/Button/Button";
import { randomFoodLog } from "../../types/randomFoodLog";

interface RandomizeFoodLogProps {
  onRandomize: (v: string) => void;
}

const RandomizeFoodLog = ({ onRandomize }: RandomizeFoodLogProps) => {
  function getRandomItem(arr: any) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  }
  const handleRandomize = () => {
    onRandomize(getRandomItem(randomFoodLog));
  };

  return (
    <Button
      type="button"
      onClick={handleRandomize}
      data-test-id="calculateFoodNutrition"
      variant="outlined"
    >
      Random Food :)
    </Button>
  );
};

export default RandomizeFoodLog;
