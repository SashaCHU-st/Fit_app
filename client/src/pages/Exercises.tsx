import { useState } from "react";
import MainPageLayout from "../components/layout/MainLayout";
import Button from "../components/ui/Button/Button";
import { Input } from "../components/ui/Input/Input";

const Exercises = () => {
  const [exercises, setExercises] = useState("");
  const [error, setError] = useState("");
  const [image, setImage] = useState("");
  const handleChangeFoodLog = (value: string) => {
    // console.log("VALUE =>", value);
    setExercises(value);
  };
  const handleCheckExercises = async () => {
    console.log("KUKUKUU");

    const result = await fetch(
      `https://wger.de/api/v2/exerciseinfo/?language=2&muscles=2`,
    );
    const data = await result.json();
    console.log(data.results);
    setImage(data.results[0].images[0].image);
  };
  return (
    <MainPageLayout>
      <Input
        type="text"
        id="exercises"
        inputMode="text"
        label="Exercises"
        value={exercises}
        error={error}
        placeholder=" e.g shoulders"
        data-test-id="exercisesLog"
        onChange={handleChangeFoodLog}
      />

      {/* {image ? <img src={image} alt="" /> : null} */}
      <Button
        type="button"
        variant="contained"
        data-test-id="checkExercisesButton"
        onClick={handleCheckExercises}
      >
        Check exercises
      </Button>
    </MainPageLayout>
  );
};

export default Exercises;
