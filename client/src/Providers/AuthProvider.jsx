import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import app from '../firebase/firebase';
import { createContext } from 'react';

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
        const auth = getAuth(app)
        const googleProvider = new GoogleAuthProvider()

        const googleSignUp = ()=>{
            return signInWithPopup(auth,googleProvider)
        }
        
        return <AuthContext.Provider value={{googleSignUp}}>
            {children}
        </AuthContext.Provider>
};

export default AuthProvider;