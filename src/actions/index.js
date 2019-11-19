export const GET_DATA_FROM_INP_ONE = 'GET_DATA_FROM_INP_ONE'
export const GET_DATA_FROM_TEXTAREA_ONE = 'GET_DATA_FROM_TEXTAREA_ONE'

export const getDataFromInpOne = data => ({
  type: GET_DATA_FROM_INP_ONE,
  data,
})

export const getDataFromTextareaOne = payload => ({
    type: GET_DATA_FROM_TEXTAREA_ONE,
    payload,
})
