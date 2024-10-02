import { configureStore } from "@reduxjs/toolkit";
import loadingReducer from '../Features/Loading/loadingSlice'
import userReducer from '../Features/User/userSlice'
import { thunk } from "redux-thunk";

const store = configureStore({
    reducer:{
        loading: loadingReducer,
        user: userReducer,
    },
    middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(thunk)
})

export default store