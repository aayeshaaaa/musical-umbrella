const initialState = {
    value: ''
  }
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case 'UPDATE_VALUE':
        return { ...state, value: action.payload }
      default:
        return state
    }
  }  