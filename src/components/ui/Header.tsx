import Logo from "./Logo"
import Nav from "./Nav"

function Header() {
  return (
    <div className="flex justify-between items-center  ">
      
      <Logo />
      <Nav />
    </div>
  )
}

export default Header
