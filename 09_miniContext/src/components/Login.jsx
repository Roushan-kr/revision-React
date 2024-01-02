import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [uName, setUName] = useState("")
    const [passwd, setPasswd] = useState("")
    const {setData} = useContext(UserContext)
    const handelSubmit =(e)=>{
        e.preventDefault()
        setData({uName, passwd})
    }
  return (
    <div className="bg-slate-900 w-full h-auto text-white text-xl
    rounded-xl my-4">
      <h2>Login</h2>
      <input className='text-black m-1 p-2' type="text" value={uName} onChange={(e)=>setUName(e.target.value)} /> <br />
      <input className='text-black m-1 p-2' type="password" value={passwd} onChange={(e)=>setPasswd(e.target.value)} /> <br />
      <button className="bg-orange-100 rounded-xl p-4 text-slate-900" onClick={handelSubmit}>Login now</button>
    </div>
  )
}

export default Login
