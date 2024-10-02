import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { LuUsers } from "react-icons/lu";
import { IoLogOutOutline } from "react-icons/io5";
import { FaListUl } from "react-icons/fa";

const Sidebar = () => {
    return (
        <section className='w-3/12 h-full flex flex-col ps-3 gap-2 '>
            <NavLink className={({isActive})=> isActive? `btn justify-start gap-4 !px-6  text-white bg-primeColor` : `btn justify-start gap-4 font-normal !px-6 `} to='/addStudent'><LuUsers className='text-xl'/> Add Student</NavLink>
            <NavLink className={({isActive})=> isActive? `btn justify-start gap-4 !px-6  text-white bg-primeColor` : `btn justify-start gap-4 font-normal !px-6 `} to='/manageStudents'><FaListUl /> Manage Students</NavLink>
            <button className='btn justify-start gap-4 font-normal !px-6'><IoLogOutOutline className='text-xl'/> Logout</button>
        </section>
    );
};

export default Sidebar;