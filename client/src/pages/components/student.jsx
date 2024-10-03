import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteStudentData, updateStudentData } from '../../Features/Students/studentsSlice';
import { toast } from 'react-toastify';

const Student = ({student}) => {
    const {_id,firstName,middleName,lastName,classNum,roll} = student
    return (
        <>   
        <DeleteModal _id={_id}/>
        <DetailsModal student={student}/>
        <EditModal student={student}/>
    
        <tr key={_id} className="bg-[#fff6f5] font-medium">
         
          <td className='px-10 pb-5 pt-3'>{firstName} {middleName} {lastName}</td>
          <td className='px-10 pb-5 pt-3'>{classNum<10? `0${classNum}`:classNum}</td>
          <td className='px-10 pb-5 pt-3'>{roll<10? `0${roll}`:roll}</td>
          <td className='flex gap-7 px-10 pb-5 pt-3'>
              <img onClick={()=>document.getElementById(`detailsModal${_id}`).showModal()} className='w-[24px] h-[24px] hover:border hover:p-1 transition-all' role='button' alt='view' src='/icons/view.png'/>
              <img onClick={()=>document.getElementById(`editModal${_id}`).showModal()} className='w-[24px] h-[24px] hover:border hover:p-1 transition-all' role='button' alt='edit' src='/icons/pen.png'/>
              <img onClick={()=>document.getElementById(`deleteModal${_id}`).showModal()} className='w-[24px] h-[24px] hover:border hover:p-1 transition-all' role='button' alt='delete' src='/icons/trash.png'/>
          </td>
        </tr>
        </>
    );
};

export default Student;


const DeleteModal = ({_id})=>{
    const dispatch = useDispatch()

 

    return <dialog id={`deleteModal${_id}`} className="modal">
      <div className="modal-box max-w-[350px]">
        <h3 className="font-bold text-base text-center">Are you sure you want to delete this item?</h3>
        <div className="modal-action justify-center gap-5">
            <button onClick={()=>dispatch(deleteStudentData(_id))} className='btn bg-primeColor text-white hover:bg-[#a40a0a]'>Delete</button>
          <form method="dialog">
            <button className="btn">Cancel</button>
          </form>
        </div>
      </div>
    </dialog>
}

const DetailsModal = ({student})=>{
    const {_id,firstName,middleName,lastName,classNum,roll,division,addressLine1,addressLine2,landmark,city,pincode} = student
    return <dialog id={`detailsModal${student._id}`} className="modal modal-bottom sm:modal-middle ">
      <div className="modal-box p-10 bg-primeColor text-white">
    <form method="dialog">
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <div className='text-lg  flex flex-col gap-3 '>
    <h3 className="font-bold ">{firstName} {middleName} {lastName}</h3>
    <p className=''>Class: {classNum<10? `0${classNum}`:classNum}</p>
    <p className=''>Division: {division}</p>
    <p className=''>Roll: {roll<10? `0${roll}`:roll}</p>
    <p>Address Line 1: {addressLine1}</p>
    <p>Address line 2: {addressLine2}</p>
    <p>landmark: {landmark}</p>
    <p>City: {city}</p>
    <p>Pin Code: {pincode}</p>
    </div>
  </div>
    </dialog>
}







const EditModal = ({student})=>{
    const {_id,firstName,middleName,lastName,classNum,roll,division,addressLine1,addressLine2,landmark,city,pincode} = student
    const dispatch = useDispatch()

    const handleUpdate = async (e)=>{
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
      const studentData = {firstName,middleName,lastName,classNum,division,roll,addressLine1,addressLine2,landmark,city,pincode,image,_id}
      try{
        const res = await dispatch(updateStudentData(studentData))
        console.log(res)
        if(res){
          document.getElementById(`editModal${_id}`).style.display = 'hidden'
          toast.success('Student Data Updated!')
        }
      }
      catch(err){
          toast.error('Something went wrong')
      }
    }

    return <dialog id={`editModal${_id}`} className="modal modal-bottom sm:modal-middle ">
      <div className="modal-box p-10 bg-primeColor">
    <form method="dialog">
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-white">✕</button>
    </form>
    <h1 className='font-bold text-xl text-white'>Update Student</h1>
    <form onSubmit={handleUpdate}>
                <section className='grid grid-cols-2 gap-3 mt-6'>
                <input type="text" placeholder="First Name" defaultValue={firstName} name='firstName' className="input input-bordered" required />
                <input type="text" placeholder="Middle Name" name='middleName' defaultValue={middleName} className="input input-bordered" required />
                <input type="text" placeholder="Last Name" defaultValue={lastName} name='lastName' className="input input-bordered" required />
                <select required  className='h-12 px-4 border border-gray-300 rounded-lg' name='class' >
                    <option className='text-gray-400' disabled value=''>Select Class</option>
                    {[1,2,3,4,5,6,7,8,9,10,11,12].map(classNum1=>{
                            if(classNum1 === classNum){
                               return <option key={classNum1} value={classNum1} selected>{classNum1}</option>
                            }
                            return <option key={classNum1} value={classNum1} >{classNum1}</option>
                    })}
                </select>
                <select required className='h-12 px-4 border border-gray-300 rounded-lg' name='division'>
                    <option className='text-gray-400' disabled selected value=''>Select Division</option>
                    {['A','B','C','D','E'].map(division1=>{
                         if(division1 === division){
                            return <option key={division1} value={division1} selected>{division1}</option>
                        }
                        return <option  key={division1} value={division1} >{division1}</option>
                    })}
                </select>
                <input type="number" placeholder="Roll Number" defaultValue={roll} name='roll' min={1} max={99}className="input input-bordered" required />
                </section>
                <section className='grid gap-3 mt-3'>
                <div className='grid grid-cols-1 gap-3'>
                <textarea defaultValue={addressLine1} placeholder="Address Line 1" name='addressLine1' className="input input-bordered p-3 px-4" required></textarea>
                <textarea defaultValue={addressLine2} placeholder="Address Line 2" name='addressLine2' className="input input-bordered p-3 px-4" required></textarea>
                </div>
               <div className='grid grid-cols-3 gap-3'>
               <input defaultValue={landmark} placeholder="Landmark" name='landmark' className="input input-bordered" required />
                <input defaultValue={city} placeholder="City" name='city'  className="input input-bordered" required />
                <input defaultValue={pincode} type='number' placeholder="Pincode" min={1000} max={999999} className="input input-bordered" name='pincode' required />
               </div>
                </section>
                <div className='flex flex-col gap-2 mt-3 bg-white border p-3 rounded-lg text-gray-400 w-full'>
                <label>Student's profile picture (optional)</label>
                <input type="file" name='image' className="" />
                </div>
                <section className='w-full grid grid-cols-3 gap-3 mt-3 '>
                <button className='btn text-white bg-primeColor !p-2'>Update Student</button>
                </section>
            </form>
  </div>
    </dialog>
}