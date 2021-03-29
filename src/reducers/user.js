const initialUserState = {
  userInfo: null,
  token: '',
};

const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case 'SET_USER': {
      const userInfo = action.payload;

      const result = {
        ...state,
        userInfo,
      };
      console.log(`This is result: ${JSON.stringify(userInfo)}`);
      return result; }
    case 'REMOVE_USER':
      return {
        ...state,
        userInfo: null,
      };
    default:
      return state;
  }
};

export default userReducer;
