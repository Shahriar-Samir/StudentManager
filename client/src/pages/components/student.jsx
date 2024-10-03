import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteStudentData } from '../../Features/students/studentsSlice';
import { toast } from 'react-toastify';

const Student = ({student}) => {
    const {_id,firstName,middleName,lastName,classNum,roll} = student
    return (
        <>   
        <DeleteModal _id={_id}/>
        <DetailsModal student={student}/>
    
        <tr key={_id} className="bg-[#fff6f5] font-medium">
         
          <td className='px-10 pb-5 pt-3'>{firstName} {middleName} {lastName}</td>
          <td className='px-10 pb-5 pt-3'>{classNum<10? `0${classNum}`:classNum}</td>
          <td className='px-10 pb-5 pt-3'>{roll<10? `0${roll}`:roll}</td>
          <td className='flex gap-7 px-10 pb-5 pt-3'>
              <img onClick={()=>document.getElementById(`detailsModal${_id}`).showModal()} className='w-[24px] h-[24px] hover:border hover:p-1 transition-all' role='button' alt='view' src='/icons/view.png'/>
              <img  className='w-[24px] h-[24px] hover:border hover:p-1 transition-all' role='button' alt='edit' src='/icons/pen.png'/>
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