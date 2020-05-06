import { createStore } from 'redux'
import {PrivacyState, UserState} from './types'

type IState = {
  user: UserState
  privacy: PrivacyState
}

const initialState: IState = {
  user: {
    password: '',
    firstName: '',
    lastName: '',
    email: '',
  },
  privacy: {
    currentProductEmailConsent: false,
    relatedProductEmailConsent: false,
  }
}

export const reducer = function (state = initialState, action: any) {
  switch (action.type) {
    case 'UPDATE_USER': {
      return {
        ...state,
        user: { ...state.user, [action.payload.name]: action.payload.value },
      }
    }
    case 'UPDATE_PRIVACY': {
      console.log(action.payload)
      return {
        ...state,
        privacy: { ...state.privacy, [action.payload.name]: action.payload.value },
      }
    }
    default:
      return state
  }
}

const store = createStore(reducer)

export default store
