const Filter = ({onChange}) => {
	return (
			<input
					type="text"
					name="filter"
					onChange={onChange}
					placeholder="Filter..."
					className='
					 w-[450px] h-[30px] mb-3
           bg-transparent rounded-xl p-2.5
           border
           border-solid
           border-primary
           text-[16px]
           outline-none
           tracking-[0.06em]
           font-normal
           text-white
           cursor-pointer
           hover:shadow-custom-primary
           focus:shadow-custom-primary
           hover:scale-105
           focus:scale-105
           transition-all
           ease-in-out
           duration-500
           placeholder-light
           placeholder-opacity-30
			'/>
	)
}

export default Filter