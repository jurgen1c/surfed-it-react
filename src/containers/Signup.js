import { useState } from 'react';
import * as api from '../utils/api';

const Signup = () => {
  const [newUser, setNewUser] = useState({
    user: {
      name: '',
      username: '',
      bio: '',
      password: '',
      password_confirmation: '',
    },
  });
  const [errors, setErrors] = useState();
  const handleChange = ({ target: { name, value } }) => {
    setNewUser({
      ...newUser,
      user: {
        ...newUser.user,
        [name]: value,
      },
    });
  };
  const handlePost = async () => {
    const { res, json } = await api.post(
      'http://localhost:3000',
      'users',
      newUser,
    );
    if (res.status === 401 || res.status === 404) {
      setErrors(json);
    }
    console.log(res, json);
  };

  const handleSubmit = () => {
    // e.prevetDefault();
    handlePost();
    console.log(errors);
  };
  return (
    <form onSubmit={handleSubmit}>
      <p>{errors}</p>
      <h4>Name</h4>
      <input type="text" name="name" onChange={handleChange} />
      <h4>User Name</h4>
      <input type="text" name="username" onChange={handleChange} />
      <h4>Email</h4>
      <input type="email" name="email" onChange={handleChange} />
      <h4>Bio</h4>
      <input type="textarea" name="bio" onChange={handleChange} />
      <h4>Password</h4>
      <input type="password" name="password" onChange={handleChange} />
      <h4>Confirm Password</h4>
      <input type="password" name="password_confirmation" onChange={handleChange} />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default Signup;
