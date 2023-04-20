import { Routes,Route } from "react-router"
import { Register } from '../Register'
import Login from '../Login'
import { Home } from '../Home'
import { About } from "../About"


export const Router = () => {
  return (
    <div>
    <Routes>
      <Route path="signup" element={<Register/>} />
      <Route path="login" element={<Login/>} />
      <Route path="about" element={<About/>} />
      <Route path="/" element={<Home/>} />
    </Routes>
  </div>
  )
}
// default export Router