import { useSelector } from 'react-redux';
import Loading from '../pages/Loading';
import { Navigate } from 'react-router-dom';


const PrivateRoute = ({children}) => {
    const user = useSelector(state=> state.user.data)
    const loading = useSelector(state=> state.loading.isLoading)
  
    if(loading){
        return <Loading/>
    }
    if(user){
        return children
    }
    return <Navigate to='/login'></Navigate>
};

export default PrivateRoute;