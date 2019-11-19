import { GET_DATA_FROM_TEXTAREA_ONE } from "../actions/index";

const initialState = { firstTextareaData: 999 }

const firstTextareaReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA_FROM_TEXTAREA_ONE:
      return { ...state, firstTextareaData: action.payload }

    default:
      return state
  }
}

export default firstTextareaReducer