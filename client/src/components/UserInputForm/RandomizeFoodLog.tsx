import Button from "../ui/Button/Button";
import { randomFoodLog } from "../../types/randomFoodLog";
import { getRandomItem } from "../../utils/getRandomItem";
interface RandomizeFoodLogProps {
  onRandomize: (v: string) => void;
}
/** Button that selects a random food item() */
const RandomizeFoodLog = ({ onRandomize }: RandomizeFoodLogProps) => {
  const handleRandomize = () => {
    onRandomize(getRandomItem(randomFoodLog));
  };

  return (
    <Button
      type="button"
      onClick={handleRandomize}
      data-test-id="randomFood"
      variant="outlined"
    >
      Random Food 🎲
    </Button>
  );
};

export default RandomizeFoodLog;
