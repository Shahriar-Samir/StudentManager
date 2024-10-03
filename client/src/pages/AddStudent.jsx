import React from 'react';
import useAxiosSecure from '../hooks/useAxiosSecure'
import { useNavigate } from 'react-router-dom';
import {toast, ToastContainer} from 'react-toastify'

const AddStudent = () => {
    const axiosSecure = useAxiosSecure()
    const navigate = useNavigate()
    
    const handleFormSubmit =async (e)=>{
            e.preventDefault()
            const form = e.target
            const firstName = form.firstName.value
            const middleName = form.middleName.value
            const lastName = form.lastName.value
            const classNum = form.class.value
            const division = form.division.value
            const roll = form.roll.value
            const addressLine1 = form.addressLine1.value
            const addressLine2 = form.addressLine2.value
            const landmark = form.landmark.value
            const city = form.city.value
            const pincode = form.pincode.value
            const image = form.image.value
            const studentData = {firstName,middleName,lastName,classNum,division,roll,addressLine1,addressLine2,landmark,city,pincode,image}
            try{
               const res = await axiosSecure.post('/addStudent',studentData)
               if(res.data.acknowledged){
                    navigate('/manageStudents')
               }
               else{
                    toast.error("Given student class and roll number already exist!")
               }
            }
            catch(err){
                console.log(err)
                toast.error('Something went wrong!')
            }
    }
    
    return (
        <main className='w-9/12 h-full'>
            <ToastContainer />
            <h1 className='font-bold'>Add Student</h1>
            <form onSubmit={handleFormSubmit}>
                <section className='grid grid-cols-3 gap-3 mt-6'>
                <input type="text" placeholder="First Name" name='firstName' className="input input-bordered" required />
                <input type="text" placeholder="Middle Name" name='middleName' className="input input-bordered" required />
                <input type="text" placeholder="Last Name" name='lastName' className="input input-bordered" required />
                <select required  className='h-12 px-4 border border-gray-300 rounded-lg' name='class'>
                    <option className='text-gray-400' disabled selected value=''>Select Class</option>
                    {[1,2,3,4,5,6,7,8,9,10,11,12].map(classNum=>{
                            return <option key={classNum} value={classNum} >{classNum}</option>
                    })}
                </select>
                <select required className='h-12 px-4 border border-gray-300 rounded-lg' name='division'>
                    <option className='text-gray-400' disabled selected value=''>Select Division</option>
                    {['A','B','C','D','E'].map(division=>{
                            return <option  key={division} value={division} >{division}</option>
                    })}
                </select>
                <input type="number" placeholder="Roll Number" name='roll' min={1} max={99}className="input input-bordered" required />
                </section>
                <section className='grid gap-3 mt-11'>
                <div className='grid grid-cols-2 gap-3'>
                <textarea placeholder="Address Line 1" name='addressLine1' className="input input-bordered p-3 px-4" required></textarea>
                <textarea placeholder="Address Line 2" name='addressLine2' className="input input-bordered p-3 px-4" required></textarea>
                </div>
               <div className='grid grid-cols-3 gap-3'>
               <input placeholder="Landmark" name='landmark' className="input input-bordered" required />
                <input placeholder="City" name='city'  className="input input-bordered" required />
                <input type='number' placeholder="Pincode" min={1000} max={999999} className="input input-bordered" name='pincode' required />
               </div>
                </section>
                <div className='flex flex-col gap-2 mt-3 bg-white w-max border p-3 rounded-lg text-gray-400'>
                <label>Student's profile picture (optional)</label>
                <input type="file" name='image' className="" />
                </div>
                <section className='w-full grid grid-cols-3 gap-3 mt-3 '>
                <button className='btn text-white bg-primeColor'>Add Student</button>
                </section>
            </form>
        </main>

    );
};

export default AddStudent;