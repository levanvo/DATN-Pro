import { Outlet } from "react-router-dom"

const Layout_Web = () => {

  return (
    <div>
      <header></header>
      <main><Outlet /></main>
      <footer></footer>
    </div>
  )
}

export default Layout_Web