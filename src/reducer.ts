import { createStore } from 'redux'
import { UserState } from './types'

type IState = {
  user: UserState
}

const initialState: IState = {
  user: {
    password: '',
    firstName: '',
    lastName: '',
    email: '',
  },
}

export const reducer = function (state = initialState, action: any) {
  switch (action.type) {
    case 'UPDATE_USER': {
      console.log(action.payload)
      return {
        ...state,
        user: { ...state.user, [action.payload.name]: action.payload.value },
      }
    }
    default:
      return state
  }
}

const store = createStore(reducer)

export default store
