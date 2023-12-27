import React from 'react'

function card({bgcolor, scrbackGrounnd}) {
  return (
    <>
      <button className="text-indigo-200 rounded-md font-semibold text-sm mx-2" onClick={()=>scrbackGrounnd(bgcolor)} style={{backgroundColor:bgcolor}}>{bgcolor}</button>
    </>
  )
}

export default card
