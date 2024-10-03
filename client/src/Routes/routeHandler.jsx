import {createBrowserRouter} from 'react-router-dom'
import App from '../App';
import Login from '../pages/login';
import PrivateRoute from './PrivateRoute';
import ManageStudents from '../pages/ManageStudents';
import AddStudentC from '../pages/AddStudent';

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
                element: <PrivateRoute><AddStudentC/></PrivateRoute>,
            },
            {
                path: '/manageStudents',
                element: <PrivateRoute><ManageStudents/></PrivateRoute>,
            },
        ]
}])

export default routeHandler;