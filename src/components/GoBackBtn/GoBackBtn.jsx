import {Link} from "react-router-dom";

const GoBackBtn = () => {
	return (
			<Link to="/">
				<button type="button" className='
      flex
      items-center
      justify-center
      w-[100px]
      h-[50px]
      border-none
      rounded-xl
      bg-accent
      mb-10
      text-white
      text-xl
      hover:shadow-custom-primary
      hover:scale-105
      focus:scale-105
      focus:shadow-custom-primary
      transition-all
      ease-in-out
      duration-500
			'>
					Go Back
				</button>
			</Link>
	);
};

export default GoBackBtn;
