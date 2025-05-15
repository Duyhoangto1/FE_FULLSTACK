import { Outlet } from "react-router-dom"
import Header from "./components/layout/header"
import axios from "./util/axios.customize"
import {  useContext, useEffect } from "react"
import AuthContext from "./components/context/auth.context";
import { Spin } from "antd";

function App() {

  const {setAuth ,appLoading, setAppLoading} = useContext(AuthContext);
 useEffect(() => {
   setAppLoading(true)
  const fetchAccount = async () => {
    const response = await axios.get(`/v1/api/account`)
  
    if(response) {
      setAuth({
        isAuthenticated: true,
        user: {
          email: response?.email || "",
          name: response?.name || "",
          role: response?.role || "",
        },
      });
    }
    console.log('check 11',response)
    setAppLoading(false)
  }
  fetchAccount()
 }, [])

  return (
    <div>
     {appLoading === true ? <div> <Spin/>Loading...</div> : <>
      <Header />
      <Outlet />
     </>}
     
    </div>
  )
}

export default App
