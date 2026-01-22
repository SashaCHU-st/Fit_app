import { NavLinks, NavShell } from "../ui/NavBar/TopNav";
import { navItemActiveClass, navItemClass } from "../ui/NavBar/navItem";
import { NavLink } from "react-router-dom";

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
        {/* <NavItem to="/nutritionCalculator">Nutrition Calculator</NavItem> */}
        {/* <NavItem to="/exercises">Search Exercises</NavItem> */}
      </NavLinks>
    </NavShell>
  );
};

export default TopNav;
