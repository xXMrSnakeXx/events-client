import {Hourglass} from "react-loader-spinner";

const Loader = () => {
	return (
			<div className='fixed w-full h-full
			 top-0 left-0 flex justify-center
			  items-center bg-[rgba(0,0,0,0.8)]'>
				<Hourglass
						visible={true}
						height="80"
						width="80"
						ariaLabel="hourglass-loading"
						wrapperStyle={{}}
						wrapperClass=""
						colors={["#306cce", "#72a1ed"]}
				/>
			</div>
	);
};

export default Loader;
