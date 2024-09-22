import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addYears, isValid } from "date-fns";
import { getYear, getMonth } from "date-fns";
import { toast } from "react-toastify";
import { range } from "../../helpers/range";
import css from "./CustomDatePicker.module.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IoCalendarNumberOutline } from "react-icons/io5";
import useDebounce from "../../hooks/useDebounce";

const minDate = addYears(new Date(), -100);
const minAgeDate = addYears(new Date(), -18); 

const years = range(1924, getYear(minAgeDate), 1);
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const CustomDatePicker = ({ values, setFieldValue, cssInput }) => {
  const handleChange = (date, setFieldValue) => {
    if (!isValid(date)) {
      toast.error("Please enter a valid date.");
      return;
    }
    if (date < minDate) {
      toast.error("Date cannot be more than 100 years ago.");
      return;
    }
    if (date > minAgeDate) {
      toast.error("You must be at least 18 years old.");
      return;
    }
    setFieldValue("birthday", date);
  };
  const debounceChange = useDebounce(handleChange, 1000);

  return (
    <DatePicker
      renderCustomHeader={({
        date,
        changeYear,
        changeMonth,
        decreaseMonth,
        increaseMonth,
        prevMonthButtonDisabled,
        nextMonthButtonDisabled,
      }) => (
        <div className={css.wrapper}>
          <button
            className={css.btnLeft}
            onClick={decreaseMonth}
            disabled={prevMonthButtonDisabled}
          >
            <IoIosArrowBack />
          </button>
          <select
            value={getYear(date)}
            onChange={({ target: { value } }) => changeYear(value)}
          >
            {years.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>

          <select
            value={months[getMonth(date)]}
            onChange={({ target: { value } }) =>
              changeMonth(months.indexOf(value))
            }
          >
            {months.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>

          <button
            className={css.btnRight}
            onClick={increaseMonth}
            disabled={nextMonthButtonDisabled}
          >
            <IoIosArrowForward />
          </button>
        </div>
      )}
      showIcon
      icon={<IoCalendarNumberOutline className={css.icon}/>}
      placeholderText="month / day / year Must be 18+"
      selected={values.birthday}
      minDate={minDate}
      maxDate={minAgeDate}
      className={cssInput}
      onChange={(date) => debounceChange(date, setFieldValue)}
      onKeyDown={(e)=>e.preventDefault()}
      filterDate={(date) => date <= minAgeDate}
    />
  );
};

export default CustomDatePicker;
