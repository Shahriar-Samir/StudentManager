import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteStudentData } from '../../Features/students/studentsSlice';
import { toast } from 'react-toastify';

const Student = ({student}) => {
    const {_id,firstName,middleName,lastName,classNum,roll} = student
    return (
        <>   <DeleteModal _id={_id}/>
        <tr key={_id} className="bg-[#fff6f5] font-medium">
         
          <td className='px-10 pb-5 pt-3'>{firstName} {middleName} {lastName}</td>
          <td className='px-10 pb-5 pt-3'>{classNum<10? `0${classNum}`:classNum}</td>
          <td className='px-10 pb-5 pt-3'>{roll<10? `0${roll}`:roll}</td>
          <td className='flex gap-7 px-10 pb-5 pt-3'>
              <img className='w-[24px] h-[24px] hover:border hover:p-1 transition-all' role='button' alt='view' src='/icons/view.png'/>
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
        <h3 className="font-bold text-lg text-center">Are you sure you want to delete this item?</h3>
        <div className="modal-action justify-center gap-5">
            <button onClick={()=>dispatch(deleteStudentData(_id))} className='btn bg-primeColor text-white hover:bg-[#a40a0a]'>Delete</button>
          <form method="dialog">
            <button className="btn">Cancel</button>
          </form>
        </div>
      </div>
    </dialog>
}