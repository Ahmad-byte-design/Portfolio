import NavItems from "./NavItems"

function Nav() {
  return (
    <nav className="bg-primary w-2/3 relative rounded-bl-[99999px]"> 
    <div 
    className="absolute -left-8 top-1/2 -translate-y-1/2 
               bg-amber-400 w-full h-full
               rounded-r-[50px] rounded-bl-[9999px] skew-x-40 
               z-[-1]"
  />
      <NavItems />
    </nav>
  )
}

export default Nav
