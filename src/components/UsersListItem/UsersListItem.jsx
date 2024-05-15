import css from "./UsersListItem.module.css";

const UsersListItem = ({ fullname, email }) => {
  return (
    <div className={css.wrap}>
      <h2 className={css.title}>{fullname}</h2>
      <p className={css.email}>{email}</p>
    </div>
  );
};

export default UsersListItem;
