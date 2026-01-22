import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import CaloriesCalculator from "../pages/NutritionCalculator";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/nutritionCalculator" element={<CaloriesCalculator />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
