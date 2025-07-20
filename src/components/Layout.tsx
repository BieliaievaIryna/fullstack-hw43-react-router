import { Outlet } from "react-router"
import FooterLinks from "./FooterLinks"
import Menu from "./Menu"

const Layout = () => {

  return (
    <div className="layout">
      <Menu />
      <main className="main-content">
        <Outlet />
      </main>
      <FooterLinks />
    </div>
  )
}

export default Layout