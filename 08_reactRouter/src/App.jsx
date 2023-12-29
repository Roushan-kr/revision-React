import { BrowserRouter as Router , Route, Routes} from "react-router-dom"
import Footer from "./components/Footers/Footer"
import Home from "./components/Home/Home"
import Headers from "./components/headers/Headers"


function App() {

  return (
    <>
    <Router>
      <Headers/>
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
      <Footer/>
    </Router>
    </>
  )
}

export default App
