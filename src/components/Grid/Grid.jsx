export const Grid = ({ children }) => {
  return (
    <ul
      className="grid
  grid-cols-[repeat(auto-fill,minmax(275px,1fr))]
  gap-5"
    >
      {children}
    </ul>
  );
};
