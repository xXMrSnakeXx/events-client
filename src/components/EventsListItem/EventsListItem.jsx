import { NavLink } from "react-router-dom";
import css from "./EventsListItem.module.css";
import { CgOrganisation } from "react-icons/cg";
import { CiCalendar } from "react-icons/ci";
import { MdOutlinePeopleAlt } from "react-icons/md";
import useFetchUsers from "../../hooks/useFetchUsers";

const EventsListItem = ({ title, description, date, organizer, id }) => {
  const { users } = useFetchUsers(id);

  return (
    <div className={css.wrapper}>
      <span className={css.date}>
        {" "}
        <CiCalendar /> {date}
      </span>
      <span className={css.participants}>
        {" "}
        <MdOutlinePeopleAlt size={18} style={{ marginRight: "5" }} />{" "}
        {users?.length}
      </span>
      <h2 className={css.title}>{title}</h2>
      <p className={css.descr}>{description}</p>
      <p className={css.organizer}>
        {" "}
        <CgOrganisation /> {organizer}
      </p>

      <div className={css.wraplink}>
        <NavLink className={css.link} to={`/event/${id}/register`}>
          <button type="button" className={css.btn}>
            Register
          </button>
        </NavLink>
        <NavLink className={css.link} to={`/event/${id}`}>
          <button type="button" className={css.btn}>
            View
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default EventsListItem;
