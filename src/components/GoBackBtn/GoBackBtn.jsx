import { Link } from "react-router-dom";
import css from "./GoBackBtn.module.css";

const GoBackBtn = () => {
  return (
    <Link to="/">
      <button type="button" className={css.btn}>
        Go Back
      </button>
    </Link>
  );
};

export default GoBackBtn;
