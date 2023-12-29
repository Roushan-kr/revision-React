import React from 'react'
import { useParams } from 'react-router-dom'

function User() {

 const {id} = useParams()
 console.log(id);
  return (
    <div className='text-center'>
      User: {id}
      <img src={DataTransfer.avtar_url} alt="git pic" width="300px" />
    </div>
  )
}

export default User
 