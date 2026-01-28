import { NavLinks, NavShell } from "../ui/NavBar/TopNav";
import { navItemActiveClass, navItemClass } from "../ui/NavBar/styles";
import { NavLink } from "react-router-dom";

/**NavBar for page Home/Nutrition Calculator/About */
const getNavItemClass = ({ isActive }: { isActive: boolean }) =>
  isActive ? `${navItemClass} ${navItemActiveClass}` : navItemClass;

const TopNav = () => {
  return (
    <NavShell aria-label="Primary">
      <NavLinks>
        <NavLink to="/" className={getNavItemClass}>
          Home
        </NavLink>
        <NavLink to="/nutritionCalculator" className={getNavItemClass}>
          Nutrition Calculator
        </NavLink>
        <NavLink to="/exercises" className={getNavItemClass}>
          Exercises
        </NavLink>
        <NavLink to="/about" className={getNavItemClass}>
          About the project
        </NavLink>
      </NavLinks>
    </NavShell>
  );
};

export default TopNav;
