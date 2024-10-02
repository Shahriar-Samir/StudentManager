import { FcGoogle } from "react-icons/fc";

const Login = () => {
    return (
        <div className='w-full h-[100vh] flex justify-center items-center'>
            <button className='btn bg-transparent border-primeColor text-primeColor hover:text-white hover:bg-[#fd887b]'><FcGoogle className="text-xl "/> Signin With Gmail</button>
        </div>
    );
};

export default Login;