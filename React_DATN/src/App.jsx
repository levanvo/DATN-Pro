import { Routes, Route } from "react-router-dom"
// import viteLogo from '/vite.svg'
import './App.css'
import Layout_Web from './Page/Layout/Layout_Web'
import Contact from "./Page/Contact"
import Bill from "./Page/Bill"
import Cart from "./Page/Cart"
import HomePage from "./Page"
import Login from "./Page/login"
import Register from "./Page/register"

function App() {

  return (
    <Routes>
      <Route path='/' element={<Layout_Web />}>
        <Route index element={<HomePage />} />
        <Route path="cart" element={<Cart />} />
        <Route path="bill" element={<Bill />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />

      </Route>
    </Routes>
  )
}

export default App
