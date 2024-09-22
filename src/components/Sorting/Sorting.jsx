import Select from "react-select";
import css from "./Sorting.module.css";
import "./Sorting.css";
const options = [
  { value: "title", label: "Title" },
  { value: "date", label: "Date" },
  { value: "organizer", label: "Organizer" },
];

const Sorting = ({ handleChange }) => {
  return (
    <Select
      className={css.sort}
      classNamePrefix="react-select"
      isClearable={true}
      name="select"
      options={options}
      onChange={handleChange}
      isSearchable={false}
    />
  );
};

export default Sorting;
