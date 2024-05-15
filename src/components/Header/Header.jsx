import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { SiEventstore } from "react-icons/si";
import css from "./Header.module.css";
import Loader from "../Loader/Loader";

export const Header = () => {
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
      </header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
