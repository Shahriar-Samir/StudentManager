import { Outlet, useLocation } from "react-router-dom"
import Header from "./pages/components/Header"
import Sidebar from "./pages/components/Sidebar"



function App() {
    const location = useLocation()

    if(location.pathname === '/'){
      return (
        <>
         <Outlet/> 
        </>
      )
    }
  return (
    <>
    <Header/>
    <main className="w-11/12 h-[100vh] flex gap-5 mt-12 mx-auto">
    <Sidebar/>
     <Outlet/> 
    </main>
    </>
  )
}

export default App
