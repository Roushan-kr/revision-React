import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import {Home, About,Layot,Contact, User } from './components'
import Github, { githubinfolodaer } from "./components/Github/github.jsx";

// method 1 of using React-dom
// const route = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layot />,
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: "about",
//         element: <About />,
//       },
//       {
//         path: "contact",
//         element: <Contact />,
//       },
//     ],
//   },
// ]);

// method 2 of using React-dom

const route= createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layot/>}>
      <Route path="" element={<Home/>}/>
      <Route path="about" element={<About/>}>
        {/* able to create nexted routes */}
        <Route path="roushan" element={<Contact/>}/>
      </Route>
      <Route path="contact" element={<Contact/>}/>
      <Route path="user/:id" element={<User/>}/>
      {/* using loder and for using value useLoaderData */}
      <Route path="github" loader={githubinfolodaer} element={<Github/>}/>
      <Route path="github/:gitId" loader={githubinfolodaer} element={<Github/>}/>
      {/* router aslo provide action for request(api based) also cached even user hover it and  */}
      {/* also a loder like next js by lodaer argnment */}
      {/* over all it start fecting enev a small event triger even before useEffect */}
    </Route>
  )
)

 
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={route} />
    {/* <App /> */}
  </React.StrictMode>
);
