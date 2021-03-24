const setUser = user => ({
  type: 'SET_USER',
  payload: user,
});

export const removeUser = () => ({
  type: 'REMOVE_USER',
});

export const sendLogin = async (hook, data) => {
  // await postData(data);
  hook(setUser(data));
};

export default setUser;
