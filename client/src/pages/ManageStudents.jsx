import React from 'react';

const ManageStudents = () => {
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
                    <input type="search" id="default-search" className="border block w-full ps-10 pe-3 py-3 text-sm  border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500  dark:placeholder-gray-400 text-black" placeholder="Search" required />
                    
                </div>
            </form>
            <button className='btn font-light bg-transparent border-[#647887]'>Export</button>
            <button className='btn font-light bg-transparent border-[#647887]'>Filter</button>
            <button className='btn font-light bg-transparent border-[#647887]'>Print</button>
            <p className='font-medium'>25 June 2024  16:10</p>
            </section>
            <section>
              
            </section>
        </main>
    );
};

export default ManageStudents;