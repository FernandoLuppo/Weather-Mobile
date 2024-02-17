import React from "react"
import Home from "./src/screens/home/Home"
import Login from "./src/screens/login/Login"

const App = () => {
  const token = false

  return <>{token ? <Home /> : <Login />}</>
}
export default App
