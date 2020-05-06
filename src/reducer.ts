import { createStore } from 'redux'
import { PrivacyState, UserState } from './types'

export type IState = {
  user: UserState
  privacy: PrivacyState
}

const initialState: IState = {
  user: {
    password: { value: '', isValid: false },
    firstName: { value: '', isValid: false },
    lastName: { value: '', isValid: false },
    email: { value: '', isValid: false },
    requestNextStep: false,
  },
  privacy: {
    currentProductEmailConsent: false,
    relatedProductEmailConsent: false,
  },
}

const checkValidity = (name: string, value: string) => {
  switch (name) {
    case 'firstName': {
      return value.length ? true : false
    }
    case 'lastName': {
      return value.length ? true : false
    }
    case 'email': {
      return value.length ? true : false
    }
    case 'password': {
      return value.length ? true : false
    }
  }
}

export const reducer = function (state = initialState, action: any) {
  switch (action.type) {
    case 'UPDATE_USER': {
      return {
        ...state,
        user: {
          ...state.user,
          [action.payload.name]: {
            value: action.payload.value,
            isValid: checkValidity(action.payload.name, action.payload.value),
          },
        },
      }
    }
    case 'UPDATE_REQUEST_NEXT_STEP': {
      return {
        ...state,
        user: {
          ...state.user,
          requestNextStep: action.payload,
        },
      }
    }
    case 'UPDATE_PRIVACY': {
      return {
        ...state,
        privacy: {
          ...state.privacy,
          [action.payload.name]: action.payload.value,
        },
      }
    }
    default:
      return state
  }
}

const store = createStore(reducer)

export default store
