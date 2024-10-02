import {getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup} from 'firebase/auth'
import app from '../firebase/firebase';
import { createContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { stopLoading } from '../Features/Loading/loadingSlice';

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
        const auth = getAuth(app)
        const googleProvider = new GoogleAuthProvider()
        const loading = useSelector((state)=> state.loading.isLoading)
        const dispatch = useDispatch()

        // loading
        // userInfo

        useEffect(()=>{
            onAuthStateChanged(auth,currentUser=>{
                        dispatch(stopLoading())

        })},[])
        console.log(loading)
        console.log(loading? 'Loading....':'stopped')

        // Signin with google handler
        const googleSignInHandler = ()=>{
            return signInWithPopup(auth,googleProvider)
        }
        
        return <AuthContext.Provider value={{googleSignInHandler}}>
            {children}
        </AuthContext.Provider>
};

export default AuthProvider;