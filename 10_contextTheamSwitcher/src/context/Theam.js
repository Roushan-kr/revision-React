import { useContext } from "react";
import { createContext } from "react";

// creteContext with default perimeters
export const TheamContext = createContext({
    theamMode :"",
    darkTheam:()=>{},
    lightTheam:()=>{}
})

// work same as we did in XContexxProvider file with childern and value
export const TheamProvider = TheamContext.Provider 

// using Custom hooks for variable management
export default function useTheam() {
    return useContext(TheamContext)
}


