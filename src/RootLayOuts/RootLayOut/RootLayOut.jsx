import React from 'react'
import Header from '../../Components/Header/Header'
import { NavLink, Outlet } from 'react-router-dom'

const RootLayOut = () => {


  return (
    <div className="rootLayOut  w-[99%] mx-auto h-screen lg:w-full overflow-hidden flex flex-col">

        <nav className=' hidden lg:block py-2 '>
            <Header/>
        </nav>

        <main className="flex flex-col lg:flex-row gap-2 flex-1 overflow-hidden p-1" >
            <nav className='lg:w-[15%]'>

            <div className="w-full p-2 grid grid-cols-3 gap-2 shrink-0
               lg:grid-cols-1 lg:w-full lg:flex lg:flex-col lg:overflow-y-auto">
                <NavLink className={({isActive})=>
                `nav-link ${isActive ? "nav-link-active" : "nav-link-inactive"} `
                } to="/" >
                    savdo
                </NavLink>
                <NavLink className={({isActive})=>
                `nav-link ${isActive ? "nav-link-active" : "nav-link-inactive"} `
                } to="MainBase" >
                    baza
                </NavLink>
                <NavLink className={({isActive})=>
                `nav-link ${isActive ? "nav-link-active" : "nav-link-inactive"} `
                } to="Xisobotlar" >
                    Xisobotlar
                </NavLink>
            </div>
            
            </nav>


            <div className="outlet_section flex-1 overflow-y-auto px-2 bg-white text-[#2D5F5D] p-4 rounded-xl shadow-inner">
                <Outlet/>
            </div>
        </main>

        <footer></footer>

    </div>
  )
}

export default RootLayOut