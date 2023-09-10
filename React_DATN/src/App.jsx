import { Routes, Route } from "react-router-dom"
import viteLogo from '/vite.svg'
import './App.css'
import Layout_Web from './Page/Layout/Layout_Web'
import Contact from "./Page/Contact"
import Bill from "./Page/Bill"
import Cart from "./Page/Cart"

function App() {

  return (
    <Routes>
      <Route path='/' element={<Layout_Web />}>
        <Route index element={<h1>HOME-PAGE</h1>} />
        <Route path="cart" element={<Cart />} />
        <Route path="bill" element={<Bill />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}

export default App
