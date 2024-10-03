import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routeHandler from './Routes/routeHandler.jsx'
import { Provider } from 'react-redux'
import store from './Store/store.js'
import AuthProvider from './Providers/AuthProvider.jsx'
import 'react-toastify/dist/ReactToastify.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <AuthProvider>
    <RouterProvider router={routeHandler}/>
    </AuthProvider>
    </Provider>
  </StrictMode>,
)
