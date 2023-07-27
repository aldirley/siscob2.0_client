import { useState, createContext } from "react";

import { useNavigate } from "react-router-dom";

import Axios from 'axios'
export const AuthContexts = createContext();

export const AuthProvider = ({children}) => {

    const navigate = useNavigate();

    const [user, setUser]               = useState(null)
   // const [ authorized, setAuthorized ] = useState("")

    const baseAPI = 'http://localhost:3001'

      

    const login = (user, password) => {


        const usr = user;
        const pwd = password 

        let authorized 

        const codCredenciais = btoa(`${usr}:${pwd}`)

        Axios.post( baseAPI + '/getUser', null,{
            headers: {
              Authorization: `Basic ${codCredenciais}`,
            },

          }).then((response) =>{
            authorized = parseInt(response.data.length)
         //console.log('response', authorized)
         if(authorized > 0) {

            setUser({id:'123', user})
            navigate("/home")
        }
           
        }).catch(   (error) => {
            console.error('Erro:', error)
        })

       console.log('Auth', authorized)

        // if(authorized > 0) {

        //     setUser({id:'123', user})
        //     navigate("/home")
        // }
    }

    
    const logout  = () => {
      console.log('logout!!!')
      setUser(null)
      //setAuthorized(null)
      navigate('/')
     
    }
        

  //  console.log(authorized)
    return(
        <AuthContexts.Provider value={{authenticated: !!user, user, login, logout}}>
            {children}
        </AuthContexts.Provider>
    )
}