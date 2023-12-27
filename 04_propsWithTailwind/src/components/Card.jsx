import React from 'react'

function card({name, list}) {
  return (
    <div>
      <div className="bg-slate-600 text-yellow-500 m-2 p-3 text-center">
       <strong className='font-bold text-2xl'> {name} </strong>
       <p>{list}</p>
      </div>
    </div>
  )
}

export default card
