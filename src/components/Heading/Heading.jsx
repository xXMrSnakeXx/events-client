import clsx from "clsx";

export const Heading = ({title, top, bottom, error, info}) => {
	return (
			<h2
					className={clsx(
							'text-large font-bold  text-center relative',
							{
								'mt-[50px] text-accent': top,
								'mb-[50px] text-accent': bottom,
								'text-error': error,
								'text-accent': info,
							}
					)}
			>
				{title}
			</h2>

	);
};
