const UsersListItem = ({ fullname, email }) => {
  return (
    <div className="p-[15px]">
      <h2 className="text-[20px] text-white mt-3">{fullname}</h2>
      <p className="text-light mt-5">{email}</p>
    </div>
  );
};

export default UsersListItem;
