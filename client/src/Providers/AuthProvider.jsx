import { createContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { stopLoading } from '../Features/Loading/loadingSlice';
import Loading from '../pages/Loading';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import app from '../firebase/firebase'

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
        const auth = getAuth(app)
    
        const loading = useSelector((state)=> state.loading.isLoading)
        const dispatch = useDispatch()

        // loading
        // userInfo

        useEffect(()=>{
            onAuthStateChanged(auth,currentUser=>{
                        dispatch(stopLoading())

        })},[])
        
        if(loading){
            return <Loading/>
        }
        
        return <AuthContext.Provider value={{name:'Samir'}} >
            {children}
        </AuthContext.Provider>
};

export default AuthProvider;