import * as api from '../utils/api';

const setUser = user => ({
  type: 'SET_USER',
  payload: user,
});

export const removeUser = () => ({
  type: 'REMOVE_USER',
});

export const sendLogin = async (hook, data) => {
  const { response, json } = await api.post(
    'http://localhost:3000',
    'users/sign_in',
    data,
    { aud: 'UNKNOWN' },
  );
  if (response.status === 401) {
    console.log(response, json);
  }
  hook(setUser(json));
};

export default setUser;
