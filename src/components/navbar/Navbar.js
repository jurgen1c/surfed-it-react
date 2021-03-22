import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div>
      <Link to='/'>Home</Link>
      <Link to='/mylocations'>My Locations</Link>
      <Link to='/myboards'>My Boards</Link>
    </div>
  )
}

export default Navbar
