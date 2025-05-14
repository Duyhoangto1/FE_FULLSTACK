import axios from "./util/axios.customize"
import {  useEffect } from "react"


function App() {
 useEffect(() => {

  const fetchHelloWorld = async () => {
    const response = await axios.get(`/v1/api`)
    // const data = await response.json()
    console.log(response)
  }
  fetchHelloWorld()
 }, [])

  return (
    <>
      hello world
    </>
  )
}

export default App
