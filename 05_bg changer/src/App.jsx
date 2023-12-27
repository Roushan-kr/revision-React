import { useState, useEffect } from 'react'
import './App.css'
import Card from './components/Card'
function App() {
  const [bgColor, setBgColor] = useState("bg-slate-800")
  useEffect(() => {
    document.body.style.backgroundColor = bgColor
  }, [bgColor])
  
  return (
    <>
      <div className={`text-inherit w-full h-screen duration-200`}>
        this
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 '>
          <div className="flex flex-wrap justify-center gap-2 shadow-lg bg-white px-2 py-3 rounded-xl">
          <Card bgcolor="black" scrbackGrounnd ={setBgColor}/>
          <Card bgcolor="red" scrbackGrounnd ={setBgColor}/>
          <Card bgcolor="green" scrbackGrounnd ={setBgColor}/>
          <Card bgcolor="blue" scrbackGrounnd ={setBgColor}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
