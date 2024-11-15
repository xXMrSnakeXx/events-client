import {useState} from "react";
import {FaArrowUp} from "react-icons/fa";

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
					className={` ${isVisible ? 'fixed bottom-5 right-5 bg-accent ' +
							'text-white border-none rounded-[50%] w-[50px] h-[50px] text-[16px] cursor-pointer ' +
							'flex items-center justify-center hover:shadow-custom-primary transition-all duration-300 ' +
							'ease-in-out transform hover:scale-105' : 'hidden'}`}
					onClick={scrollToTop}
			>
				<FaArrowUp size={25}/>
			</button>
	);
};

export default ButtonToTop;
