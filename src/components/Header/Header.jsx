import { Suspense } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { SiEventstore } from "react-icons/si";
import css from "./Header.module.css";
import Loader from "../Loader/Loader";
import Sorting from "../Sorting/Sorting";
import { useSelect } from "../../hooks/useSelect";

export const Header = () => {
  const { setSelect } = useSelect();
  const handleChange = (selectOption) => {
    setSelect(selectOption);
  };
  const { pathname } = useLocation();
  return (
    <>
      <header className={css.header}>
        <div className={css.wrapper}>
          <SiEventstore className={css.logo} />
          <nav>
            <ul className={css.nav}>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? css.active : css.link
                  }
                >
                  Events
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
        {pathname === "/" && <Sorting handleChange={handleChange} />}
      </header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
