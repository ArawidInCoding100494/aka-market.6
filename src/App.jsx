
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"

// roots
import RootLayOut from "./RootLayOuts/RootLayOut/RootLayOut"

// pages
import DayTrade from "./Pages/DayTrade/DayTrade"
import MainBase from "./Pages/MainBase/MainBase"
import Xisobotlar from "./Pages/Xisobotlar/Xisobotlar"



function App() {

  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route element={<RootLayOut/>}>
        <Route path="/" element={<DayTrade/>} />
        <Route path="/MainBase" element={<MainBase/>} />
        <Route path="/Xisobotlar" element={<Xisobotlar/>} />
        </Route>
      </Route>
    )
  )



  return <RouterProvider router={routes} />
}

export default App


        {/* <button className="bg-[#B7E1E4] p-4">close</button>
    <button className="bg-[#FF7F50] p-4">close</button>
    <button className="bg-[#F2994A] p-4">close</button>
    <button className="bg-[#2D5F5D] p-4">close</button>
    <button className="bg-[#1B263B] p-4">close</button>
    <button className="bg-[#62AAB0] p-4">close</button>
    <button className="bg-[#1B4965] p-4">close</button>
    <button className="bg-[#E76F51] p-4">close</button>
    <button className="bg-[#457B9D] p-4">close</button> */}
