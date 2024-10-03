import { createSlice } from "@reduxjs/toolkit"
import {getAuth, GoogleAuthProvider, signInWithPopup, signOut} from 'firebase/auth'
import app from '../../firebase/firebase';
import axios from 'axios'

const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()

const initialState = {
        data:null
}

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        setUserData: (state,action)=>{
           state.data=action.payload
        }
    }
})

export const {setUserData} = userSlice.actions

export const googleSingIn = ()=> async (dispatch)=>{
    try{
        const res = await signInWithPopup(auth,googleProvider)
        const {email,uid,displayName,photoURL} = res.user
        const userSaved = await axios.post(import.meta.env.VITE_API_LINK+'addUser', {email,uid,displayName,photoURL})
        if(userSaved.data.acknowledged){
            axios.post(import.meta.env.VITE_API_LINK+'login',{uid,email},{withCredentials:true})
            dispatch(setUserData({email,uid,displayName,photoURL}))
            return {res:true}
        }
    }
    catch(err){
        console.log(err)
    }
}

export const logout = ()=> async (dispatch)=>{
    try{
        await signOut(auth)
        axios.post(import.meta.env.VITE_API_LINK+'logout',{},{withCredentials:true})
        dispatch(setUserData(null))
        return {res:true}
    }
    catch(err){
        console.log(err)
    }
}

export default userSlice.reducer