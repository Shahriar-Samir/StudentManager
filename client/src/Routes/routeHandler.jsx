import {createBrowserRouter} from 'react-router-dom'
import App from '../App';
import Login from '../pages/login';
import AddStudent from '../pages/AddStudent';
import PrivateRoute from './PrivateRoute';

const routeHandler = createBrowserRouter([{
        path: '/',
        element:<App/>,
        children:[
            {
                path: '/login',
                element: <Login/>,
            },
            {
                path: '/addStudent',
                element: <PrivateRoute><AddStudent/></PrivateRoute>,
            },
        ]
}])

export default routeHandler;