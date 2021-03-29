/* eslint-disable */
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeUser } from '../../actions';
import * as api from '../../utils/api';

const Navbar = ({ user }) => {
  // const { setToken } = useToken();
  const dispatch = useDispatch();
  const logout = async () => {
    const session = { jwt: user?.jwt, aud: user?.aud };
    const { response, json } = await api.del('http://localhost:3000', 'users/sign_out', {}, session);
    if (response.status === 200) {
      dispatch(removeUser())
      console.log('logged out success');
    }
    if (sessionStorage.token) {
      sessionStorage.removeItem('token');
    }
    console.log(json);
    // setToken();
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
