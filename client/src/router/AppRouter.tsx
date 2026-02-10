import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import NutritionCalculator from "../pages/NutritionCalculator";
import AboutProject from "../pages/AboutProject";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/nutritionCalculator" element={<NutritionCalculator />} />
        <Route path="/about" element={<AboutProject />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
