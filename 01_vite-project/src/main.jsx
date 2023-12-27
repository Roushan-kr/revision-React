import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {JSX as _jsx} from 'react/jsx-runtime.js' // aslo use as alternative to reacr.create()
// react use a bundlear to convert this (jsx) syntex to their maintainable object based key value pairs
// <App/> internally is a function 

function MyApp (){
  return (
    <h3>this is new world</h3>
  )
}
const anotherElement =(
  <a href="http://google.com"><h2>this</h2>Visit to Google now</a>
)

// creating a element in react function
// inide this also look for variale injection which happend after creating dom tree
const newVar ="\n this is new"
const reactElement = React.createElement("a",{
  href: "https://google.com",
  target: "blank", 
},
"another link React function",
newVar
)


ReactDOM.createRoot(document.getElementById('root')).render(
  // <>
  //  <React.StrictMode>
  //   <App />
  //   MyApp()
  //   {MyApp()}
  //   <MyApp/>
  //   anotherElement // executed after using {}  
  //  </React.StrictMode>
  //  anotherElement  // this also
  // </> 
  // MyApp() // if use singly it execute automic 
  // anotherElement // shiped directly to their react tree
  // [anotherElement, reactElement] // shiped directly to their react as same cluster
  <App/>
  // reactElement
)


// {} in a raper acts a evluation statement 
// inside this we not have to do operation rether have to return that evluated result

