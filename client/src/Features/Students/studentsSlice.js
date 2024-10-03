import { createSlice } from "@reduxjs/toolkit";
import axiosSecure from "../../Interceptors/axiosInterceptors";

const initialState = {datalist:[]}

const studentsSlice = createSlice({
    name: 'loading',
    initialState,   
    reducers:{
        setStudentsData: (state,action)=>{
            state.datalist = action.payload
        },
        deleteStudent: (state,action)=>{
              state.datalist = state.datalist.filter(student=> student._id !== action.payload)
        }
    } 
})

export const {setStudentsData,deleteStudent} = studentsSlice.actions
export default studentsSlice.reducer


export const addStudent = (studentData)=> async ()=>{
    try{
        const res = await axiosSecure.post('/addStudent',studentData)
        return res.data.acknowledged
    }
    catch(err){
        console.log(err)
    }
}

export const getAllStudents = ()=> async (dispatch)=>{
    try{
        const res = await axiosSecure.get('/students')
        dispatch(setStudentsData(res.data))
        return true
    }
    catch(err){
        console.log(err)
    }
}


export const deleteStudentData = (_id)=> async (dispatch)=>{
    try{
        const res = await axiosSecure.delete(`/deleteStudent/${_id}`)
        dispatch(deleteStudent(_id))
        return res.data
    }
    catch(err){
        console.log(err)
    }
}