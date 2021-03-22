const initialUserState = {
  user: null
};

const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case 'SET_USER': {
      const user = action.payload;

      const result = {
        ...state,
        user,
      };
      return result; }
    case 'REMOVE_USER':
      return {
        user: null
      };
    default:
      return state;
  }
};

export default userReducer;