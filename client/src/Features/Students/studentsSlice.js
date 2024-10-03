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
        },
        updateStudent: (state,action)=>{
              const newDatalist = state.datalist.map(student=> {
                    if(student._id === action.payload._id){
                        return {...student,...action.payload}
                    }
                    else{
                        return student
                    }
            })
            state.datalist = newDatalist
        },
    } 
})

export const {setStudentsData,deleteStudent,updateStudent} = studentsSlice.actions
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

export const getAllStudents = (value,filter=false)=> async (dispatch)=>{
    try{
        const res = await axiosSecure.get('/students', {params:{value:value===''? 'noValue' : value, filter:!filter? 'noFilter': filter}})
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


export const updateStudentData = (student)=> async (dispatch)=>{
    try{
        const res = await axiosSecure.put(`/updateStudent`,student)
        dispatch(updateStudent(student))
        return res.data
    }
    catch(err){
        console.log(err)
    }
}