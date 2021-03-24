import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeUser } from '../../actions';

const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/mylocations">My Locations</Link>
      <Link to="/myboards">My Boards</Link>
      <button type="button" onClick={() => dispatch(removeUser(false))}>Signout</button>
    </div>
  );
};

export default Navbar;
