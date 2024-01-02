import React from 'react'
import Headers from './headers/Headers'
import { Outlet } from 'react-router-dom'
import Footer from './Footers/Footer'

function Layot() {
  return (
    <>
    <Headers/>
    <Outlet/>
    {/* used navLink with isActive props to highlight classes */}
    <Footer/>
    </>
  )
}

export default Layot
