import React from 'react';

const AddStudent = () => {
    return (

        <main className='w-9/12 h-full'>
            <h1 className='font-bold'>Add Student</h1>
            <form>
                <section className='grid grid-cols-3 gap-3 mt-6'>
                <input type="password" placeholder="password" className="input input-bordered" required />
                <input type="password" placeholder="password" className="input input-bordered" required />
                <input type="password" placeholder="password" className="input input-bordered" required />
                <input type="password" placeholder="password" className="input input-bordered" required />
                <input type="password" placeholder="password" className="input input-bordered" required />
                <input type="password" placeholder="password" className="input input-bordered" required />
                </section>
                <section className='grid gap-3 mt-11'>
                <div className='grid grid-cols-2 gap-3'>
                <input type="password" placeholder="password" className="input input-bordered" required />
                <input type="password" placeholder="password" className="input input-bordered" required />
                </div>
               <div className='grid grid-cols-3 gap-3'>
               <input type="password" placeholder="password" className="input input-bordered" required />
                <input type="password" placeholder="password" className="input input-bordered" required />
                <input type="password" placeholder="password" className="input input-bordered" required />
               </div>
                </section>
                <section className='w-full grid grid-cols-3 gap-3 mt-3 '>
                <button className='btn text-white bg-primeColor'>Add Student</button>
                </section>
            </form>
        </main>

    );
};

export default AddStudent;