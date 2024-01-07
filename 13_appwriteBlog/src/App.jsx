import "./App.css";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "./store/authSlice";
import authService from "./app/auth";
import { Footer, Header } from "./components";
import {Outlet} from 'react-router-dom'
function App() {
  // use for loding animtion
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      }).catch((err)=>{console.log(err);})
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return !loading ?(
    <>
    <div className="min-h-screen flex flex-wrap content-between bg-slate-500">
      <div className="w-full block">
        <Header/>
        <main>
          {/* <Outlet/> */}
        </main> 
        <Footer/>
      </div>
    </div>
    </>
  ):null;
}

export default App;
