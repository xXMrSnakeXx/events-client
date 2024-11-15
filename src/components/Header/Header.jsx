import {Suspense} from "react";
import {NavLink, Outlet, useLocation} from "react-router-dom";
import {SiEventstore} from "react-icons/si";
import Loader from "../Loader/Loader";
import Sorting from "../Sorting/Sorting";
import {useSelect} from "../../hooks/useSelect";

export const Header = () => {
	const {setSelect} = useSelect();
	const handleChange = (selectOption) => {
		setSelect(selectOption);
	};
	const {pathname} = useLocation();
	return (
			<>
				<header
						className='rounded-bl-[10px] shadow-custom-dark rounded-br-[10px] bg-main-background flex items-center justify-between py-5 px-2.5'>
					<div className='flex items-center'>
						<SiEventstore className='mr-[30px] w-10 h-10 text-accent'/>
						<nav>
							<ul className='flex items-center gap-5'>
								<li>
									<NavLink
											to="/"
											className={({isActive}) =>
													isActive ? 'text-white bg-accent py-1.5 px-3 rounded-md scale-100 pointer-events-none text-medium'
															: "text-light text-medium font-bold uppercase transition duration-200 ease-animation-cubicBezier transform scale-90 hover:scale-100 hover:text-white"
											}
									>
										Events
									</NavLink>
								</li>
							</ul>
						</nav>
					</div>
					{pathname === "/" && <Sorting handleChange={handleChange}/>}
				</header>
				<Suspense fallback={<Loader/>}>
					<Outlet/>
				</Suspense>
			</>
	);
};
