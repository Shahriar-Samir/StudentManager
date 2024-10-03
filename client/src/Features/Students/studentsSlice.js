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
    } 
})

export const {setStudentsData} = studentsSlice.actions
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