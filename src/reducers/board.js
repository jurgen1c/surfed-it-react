const initialBoardsState = {
  boards: [],
  sessions: [],
  new: null,
}

const boardsReducer = (state = initialBoardsState, action) => {
  switch(action.type){
    case 'SET_BOARDS':
      return {
        ...state,
        boards: action.payload
      }
    default:
      return state
  }
}

export default boardsReducer;