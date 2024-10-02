import { createSlice } from "@reduxjs/toolkit";

const initialState = false

const loadingSlice = createSlice({
    name: 'loading',
    initialState,   
    reducers:{
        isLoading: (state)=>{
            !state
        },
        stopLoading: (state)=>{
            !state
        }
    } 
})

export const {isLoading,stopLoading} = loadingSlice
export default loadingSlice.reducer