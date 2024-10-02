import {createBrowserRouter} from 'react-router-dom'
import App from '../App';
import Login from '../pages/login';

const routeHandler = createBrowserRouter([{
        path: '/',
        element:<App/>,
        children:[
            {
                path: '/login',
                element: <Login/>,
            },
        ]
}])

export default routeHandler;