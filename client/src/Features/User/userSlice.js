import { createSlice } from "@reduxjs/toolkit"
import {getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut} from 'firebase/auth'
import app from '../../firebase/firebase';

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
        const {email,uid,} = res.user
        dispatch(setUserData({email,uid}))
        return {res:true}
    }
    catch(err){
        console.log(err)
    }
}

export const logout = ()=> async (dispatch)=>{
    try{
        await signOut(auth)
        dispatch(setUserData(null))
        return {res:true}
    }
    catch(err){
        console.log(err)
    }
}

export default userSlice.reducer