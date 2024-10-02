import { configureStore } from "@reduxjs/toolkit";
import loadingReducer from '../Features/Loading/loadingSlice'

const store = configureStore({
    reducer:{
        loading: loadingReducer
    }
})

export default store