import { Outlet } from "react-router-dom"
import Header from "./pages/components/Header"



function App() {


  return (
    <>
    <Header/>
     <Outlet/> 
    </>
  )
}

export default App
