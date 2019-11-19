import { GET_DATA_FROM_INP_ONE } from '../actions/index'

const initialState = {
  inpOneInitial: 7654321,
}

const inputOneReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA_FROM_INP_ONE:
      return { ...state, inpOneInitial: action.data }
    default:
      return state
  }
}

export default inputOneReducer
