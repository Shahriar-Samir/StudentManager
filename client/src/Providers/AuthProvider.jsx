import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import app from '../firebase/firebase';
import { createContext } from 'react';

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
        const auth = getAuth(app)
        const googleProvider = new GoogleAuthProvider()
        // loading
        // userInfo

        // Signin with google handler
        const googleSignInHandler = ()=>{
            return signInWithPopup(auth,googleProvider)
        }
        
        return <AuthContext.Provider value={{googleSignInHandler}}>
            {children}
        </AuthContext.Provider>
};

export default AuthProvider;