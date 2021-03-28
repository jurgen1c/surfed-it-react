/* eslint-disable */
import { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import setUser from '../../actions';
import * as api from '../../utils/api';
import useToken from '../../utils/useToken';

const Login = () => {
  const { setToken } = useToken();
  // const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState();
  const [password, setPassword] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const { search } = useLocation();
  const history = useHistory();

  const handleConfirmation = async () => {
    const url = `users/confirmation${location.search}`;
    const { response, json } = await api.get('http://localhost:3000', url);
    setConfirmed(response.status === 200)
    setMessage(JSON.stringify(json))
  }
  useEffect(() => {
    if (search !== ""){
      handleConfirmation();
    }
    console.log(location);
    console.log(confirmed);
  }, [search])

  const handleSubmit = async e => {
    e.preventDefault();
    const data = {
      token: {
        email,
        password,
      },
    };
    const userData = {
      user: {
        email,
        password,
      },
    };
    const { response, json } = await api.post(
      'http://localhost:3000',
      'users',
      userData,
      { aud: 'UNKNOWN' },
    );
    if (response.status === 401) {
      console.log(response, json);
    }
    setUser(json);
    /*
    sendLogin(dispatch, data);
    dispatch(setUser(true)); */
    setToken(data);
  };

  return (
    <div>
      {message ? <p>{message}</p> : <p>Login Form</p>}
      <form onSubmit={handleSubmit}>
        <input type="text" name="email" onChange={({ target: { value } }) => setEmail(value)} />
        <input type="password" name="pass" onChange={({ target: { value } }) => setPassword(value)} />
        <button type="submit" name="login">Login</button>
      </form>
      <button type="button" onClick={() => history.push('/signup')}>Signup</button>
    </div>
  );
};

export default Login;
