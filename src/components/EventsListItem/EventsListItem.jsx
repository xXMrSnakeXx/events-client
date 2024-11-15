import {NavLink} from "react-router-dom";
import {CgOrganisation} from "react-icons/cg";
import {CiCalendar} from "react-icons/ci";
import {MdOutlinePeopleAlt} from "react-icons/md";
import useFetchUsers from "../../hooks/useFetchUsers";

const EventsListItem = ({title, description, date, organizer, id}) => {
	const {users} = useFetchUsers(id);

	return (<div className='flex flex-col h-full w-full p-2.5 relative '>
      <span className='text-white'>
	      <CiCalendar/> {date}
      </span>
		<span className='flex justify-center items-center text-white absolute top-2.5 right-2.5'>
        {" "}
			<MdOutlinePeopleAlt size={18} style={{marginRight: "5"}}/>{" "}
			{users?.length}
      </span>
		<h2 className='text-[20px] text-white mt-3'>{title}</h2>
		<p className='text-white mt-5'>{description}</p>
		<p className='text-white ml-auto mt-3'>
			<CgOrganisation/> {organizer}
		</p>

		<div className='flex items-center w-full justify-between absolute left-0 bottom-2.5 p-1'>
			<NavLink className='text-accent text-medium scale-90' to={`/event/${id}/register`}>
				<button type="button" className='flex justify-center
          items-center w-20 h-10 border-none
           rounded-xl bg-accent text-white hover:shadow-custom-primary hover:scale-105
           focus:shadow-custom-primary
           transition-transform duration-200
           '>
					Register
				</button>
			</NavLink>
			<NavLink className='text-accent text-medium scale-90' to={`/event/${id}`}>
				<button type="button" className='flex justify-center
          items-center w-20 h-10 border-none
           rounded-xl bg-accent text-white hover:shadow-custom-primary hover:scale-105
           focus:shadow-custom-primary
           transition-transform duration-200
           '>
					View
				</button>
			</NavLink>
		</div>
	</div>);
};

export default EventsListItem;
