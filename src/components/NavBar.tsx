import { Button } from "./ui/button"

const NavBar = async () => {

  return (
    <nav className = "h-16">
      <div className = "flex items-center justify-between h-full max-w-screen-xl mx-auto px-2.5 md:px-20">
        <h1></h1>
        <h1 className = "text-3xl font-bold">
          Portfolio
        </h1>
        <div>
          <Button variant = "outline" className = "">
            Connect Wallet
          </Button>
        </div>
      </div>
    </nav>
  )
}

export default NavBar