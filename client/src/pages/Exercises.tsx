import { useState } from "react";
import MainPageLayout from "../components/layout/MainLayout";
import Button from "../components/ui/Button/Button";
import { Input } from "../components/ui/Input/Input";
import Image from "../components/ui/Image/Image";
import ExerciseResult from "../components/ExerciseResult/ExerciseResult";
import { ColumnContainer } from "../components/ui/primitives/ColumnContainer";

const Exercises = () => {
  const [exercises, setExercises] = useState("");
  const [error, setError] = useState("");
  const [image, setImage] = useState("");
  const [data, setData] = useState<string[]>();
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
    setData(data.results);
    data.results.map((result: any) => {
      if (result.images[0]) {
        console.log(result.images[0].image);
        // setData(result.images[0].image)
      }
    });
    console.log();
    setImage(data.results[0].images[0].image);
  };
  return (
    <MainPageLayout>
      <ColumnContainer>
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

        <ExerciseResult>
          {data?.map((result: any) =>
            result.images?.[0] ? (
              <div key={result.id}>
                <Image src={result.images[0].image} />

                <p>{result.name}</p>
                <p>{result.category}</p>
              </div>
            ) : null,
          )}
        </ExerciseResult>
      </ColumnContainer>
    </MainPageLayout>
  );
};

export default Exercises;
