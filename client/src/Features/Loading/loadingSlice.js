import { createSlice } from "@reduxjs/toolkit";

const initialState = {isLoading:true}

const loadingSlice = createSlice({
    name: 'loading',
    initialState,   
    reducers:{
        startLoading: (state)=>{
            state.isLoading = true
        },
        stopLoading: (state)=>{
            state.isLoading = false
        }
    } 
})

export const {isLoading,stopLoading} = loadingSlice.actions
export default loadingSlice.reducer