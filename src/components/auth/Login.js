import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import useToken from '../../utils/useToken';

const Login = () => {
  const { setToken } = useToken();
  // const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleSubmit = () => {
    const data = {
      token: {
        email,
        password,
      },
    };
    /*
    sendLogin(dispatch, data);
    dispatch(setUser(true)); */
    setToken(data);
  };

  return (
    <div>
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
