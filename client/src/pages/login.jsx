import { FcGoogle } from "react-icons/fc";
import {useDispatch, useSelector} from 'react-redux'
import { googleSingIn } from "../Features/User/userSlice";
import {useNavigate} from 'react-router-dom'

const Login = () => {
    const user = useSelector(state=> state.user.data)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    console.log(user)
    const login =async ()=>{
         try{
           const res = await dispatch(googleSingIn())
            return res? navigate('/addStudent') : ''
         }
        catch(err){
            console.log(err)
        }
    }

    return (
        <div className='w-full h-[100vh] flex justify-center items-center'>
            <button onClick={login} className='btn bg-transparent border-primeColor text-primeColor hover:text-white hover:bg-[#fd887b]'><FcGoogle className="text-xl "/> Signin With Gmail</button>
        </div>
    );
};

export default Login;