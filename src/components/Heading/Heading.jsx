import css from "./Heading.module.css";
import clsx from "clsx";

export const Heading = ({ title, top, bottom, error, info }) => {
  return (
    <h2
      className={clsx(css.title, {
        [css.top]: top,
        [css.bottom]: bottom,
        [css.error]: error,
        [css.info]: info,
      })}
    >
      {title}
    </h2>
  );
};
