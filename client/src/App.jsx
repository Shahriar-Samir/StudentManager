import { Outlet } from "react-router-dom"
import Header from "./pages/components/Header"
import Sidebar from "./pages/components/Sidebar"



function App() {


  return (
    <>
    <Header/>
    <main className="w-full h-[100vh] flex gap-5 mt-12">
    <Sidebar/>
     <Outlet/> 
    </main>
    </>
  )
}

export default App
