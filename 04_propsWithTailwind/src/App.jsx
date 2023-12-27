import { useState } from 'react'
import './App.css'
import Card from './components/Card'
function App() {
const data= {name:"rj", work:"student"}
  return (
    <>
    <h1 className='bg-green-600 font-bold p-4 rounded-xl '>Tailwind is initilised</h1>
    <Card name="roushan"/>
    <Card name="mohan"/>
    <Card name="rakesh" list={data.name}/>
    </>
  )
}

export default App
