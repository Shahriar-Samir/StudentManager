import {createBrowserRouter} from 'react-router-dom'
import App from '../App';
import Login from '../pages/login';
import AddStudent from '../pages/AddStudent';
import PrivateRoute from './PrivateRoute';
import ManageStudents from '../pages/ManageStudents';

const routeHandler = createBrowserRouter([{
        path: '/',
        element:<App/>,
        children:[
            {
                path: '/',
                element: <Login/>,
            },
            {
                path: '/addStudent',
                element: <PrivateRoute><AddStudent/></PrivateRoute>,
            },
            {
                path: '/manageStudents',
                element: <PrivateRoute><ManageStudents/></PrivateRoute>,
            },
        ]
}])

export default routeHandler;