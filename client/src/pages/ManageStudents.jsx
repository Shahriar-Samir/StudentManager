import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Student from './components/student';
import { getAllStudents } from '../Features/Students/studentsSlice';

const ManageStudents = () => {
    const students = useSelector(state=> state.students.datalist)
    const dispatch = useDispatch()
    const presentTime = new Date()
    const [checks, setChecks] = useState({A:false,B:false,C:false,D:false,E:false});


    const printHandler = ()=>{
      window.print()
    }

    const handleCheckbox = (e) => {
      const { name, checked } = e.target;
  
      setChecks((preValues) => ({
        ...preValues,
        [name]: checked,
      }));
      filter(name,checked)
    };

  
  

    const filter = (name,checked)=>{
      const newValues = {...checks,[name]:checked}
      dispatch(getAllStudents('',newValues))
    }

    useEffect(()=>{
         dispatch(getAllStudents('noValue'))
    },[])


    return (
        <main className='w-9/12 h-full'>
            
            <section className='flex items-center gap-8'>
            <h1 className='font-bold'>Manage Students</h1>
            <form className="max-w-[266px]">   
                <label htmlFor="default-search" className="mb-2 text-sm font-medium sr-only dark:text-white">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <img src='/icons/searchbar.png' className='w-3 h-3'/>
                    </div>
                    <input onChange={(e)=>dispatch(getAllStudents(e.target.value))} type="search" id="default-search" className="border block w-full ps-10 pe-3 py-3 text-sm  border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500  dark:placeholder-gray-400 text-black" placeholder="Search" required />
                    
                </div>
            </form>
            <button className='btn font-light bg-transparent border-[#647887]'>Export</button>
            <div className="dropdown dropdown-bottom dropdown-end">
  <div tabIndex={0} role="button" className="btn m-1 bg-transparent border border-gray-500 font-normal">Filter</div>
  <form tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-[150px] p-2 shadow" onSubmit={filter}>
        {
          ['A','B','C','D','E'].map(division=>{
            return <div  key={division} onChange={handleCheckbox} className='flex items-center justify-center gap-5 text-lg'><input name={division} id={division} type='checkbox'/> <label htmlFor={division}>Division {division}</label></div>

          })
        }
  </form>
</div>
            <button onClick={printHandler} className='btn font-light bg-transparent border-[#647887]'>Print</button>
            <p className='font-medium text-sm'>{presentTime.toLocaleString()}</p>
            </section>

            <section>
            <div className="overflow-x-auto rounded-s-md rounded-e-md mt-8 shadow">
  <table className="table text-sm">
    {/* head */}
    <thead>
      <tr className='bg-primeColor text-white rounded-s-md rounded-e-md'>
 
        <th className='text-sm px-10 pb-5 pt-3 w-1/3'>Name</th>
        <th className='text-sm px-10 pb-5 pt-3 w-1/3'>Class</th>
        <th className='text-sm px-10 pb-5 pt-3 w-1/3'>Roll No.</th>
        <th className='text-sm  px-10 pb-5 pt-3'>View / Edit / Delete</th>
      </tr>
    </thead>
    <tbody>
      {
        students.map(student=>{
          return <Student student={student}/>
        })
      }
    </tbody>
  </table>
</div>
            </section>
        </main>
    );
};

export default ManageStudents;