const initialLocationState = {
  location: {

  },
  newLocation: null,
  sessions: {

  },
  newSession: null
}

const locationReducer = (state = initialLocationState, action) => {
  switch(action.type){
    case 'SET_LOCATIONS':
      return {
        ...state,
        location: action.payload
      }
    default:
      return state
  }
}

export default locationReducer;