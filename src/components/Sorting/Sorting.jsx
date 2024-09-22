import Select from "react-select";
import css from "./Sorting.module.css";
import "./Sorting.css";
import { useSelect } from "../../hooks/useSelect";
const options = [
  { value: "title", label: "Title" },
  { value: "date", label: "Date" },
  { value: "organizer", label: "Organizer" },
];

const Sorting = ({ handleChange }) => {
  const { select } = useSelect();
  return (
    <Select
      className={css.sort}
      classNamePrefix="react-select"
      isClearable={true}
      name="select"
      options={options}
      value={
        select ? options.find((option) => option.value === select.value) : null
      }
      onChange={handleChange}
      isSearchable={false}
    />
  );
};

export default Sorting;
