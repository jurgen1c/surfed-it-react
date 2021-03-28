import { Link } from 'react-router-dom';
import useToken from '../../utils/useToken';

const Navbar = () => {
  const { setToken } = useToken();
  const logout = () => {
    sessionStorage.removeItem('token');
    setToken();
  };
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/mylocations">My Locations</Link>
      <Link to="/myboards">My Boards</Link>
      <button type="button" onClick={() => logout()}>Signout</button>
    </div>
  );
};

export default Navbar;
