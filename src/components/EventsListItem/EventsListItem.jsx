import { NavLink } from "react-router-dom";
import css from "./EventsListItem.module.css";
import { CgOrganisation } from "react-icons/cg";
import { CiCalendar } from "react-icons/ci";

const EventsListItem = ({ title, description, date, organizer, id }) => {
  return (
    <div className={css.wrapper}>
      <span className={css.date}>
        {" "}
        <CiCalendar /> {date}
      </span>
      <h2 className={css.title}>{title}</h2>
      <p className={css.descr}>{description}</p>
      <p className={css.organizer}>
        {" "}
        <CgOrganisation /> {organizer}
      </p>

      <div className={css.wraplink}>
        <NavLink
          className={({ isActive }) => (isActive ? css.active : css.link)}
          to={`/event/${id}/register`}
        >
          <button>Register</button>
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? css.active : css.link)}
          to={`/event/${id}`}
        >
          <button>View</button>
        </NavLink>
      </div>
    </div>
  );
};

export default EventsListItem;
