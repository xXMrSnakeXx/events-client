import { useState } from "react";
import css from "./ButtonToTop.module.css";
import { FaArrowUp } from "react-icons/fa";

const ButtonToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  window.addEventListener("scroll", handleScroll);
  return (
    <button
      className={`${css.scrollbtn} ${isVisible ? css.visible : ""}`}
      onClick={scrollToTop}
    >
      <FaArrowUp size={25} />
    </button>
  );
};

export default ButtonToTop;
